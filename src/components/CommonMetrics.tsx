import styled from "@emotion/styled";
import { EMETRICS } from "../constants/metrics";
import data from "../../data.json";
import { IAccount, IAccountFilterOptions } from "../interface/account";
import {
  EACCOUNT_CATEGORY,
  EACCOUNT_TYPE,
  EVALUE_TYPE,
} from "../constants/account";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const MetricsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const MetricItem = styled.li`
  font-size: 1rem;
`;

const accountData: IAccount[] = data.data;

function calTotalValue(
  accountData: IAccount[],
  filterOptions: IAccountFilterOptions
) {
  const filteredAccountData = accountData.filter((account) => {
    return Object.entries(filterOptions).every(([key, value]) => {
      if (Array.isArray(value)) {
        return value.includes(account[key as keyof IAccountFilterOptions]);
      }
      return account[key as keyof IAccountFilterOptions] === value;
    });
  });
  return filteredAccountData.reduce(
    (acc, account) => acc + account.total_value,
    0
  );
}

const revenue = calTotalValue(accountData, {
  account_category: EACCOUNT_CATEGORY.REVENUE,
});
const expense = calTotalValue(accountData, {
  account_category: EACCOUNT_CATEGORY.EXPENSE,
});
const grossProfitMagin =
  (calTotalValue(accountData, {
    account_type: EACCOUNT_TYPE.SALES,
    value_type: EVALUE_TYPE.DEBIT,
  }) /
    revenue) *
  100;
const netProfitMargin = ((revenue - expense) / revenue) * 100;
const assets =
  calTotalValue(accountData, {
    account_category: EACCOUNT_CATEGORY.ASSETS,
    value_type: EVALUE_TYPE.DEBIT,
    account_type: [
      EACCOUNT_TYPE.CURRENT,
      EACCOUNT_TYPE.BANK,
      EACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
    ],
  }) -
  calTotalValue(accountData, {
    account_category: EACCOUNT_CATEGORY.ASSETS,
    value_type: EVALUE_TYPE.CREDIT,
    account_type: [
      EACCOUNT_TYPE.CURRENT,
      EACCOUNT_TYPE.BANK,
      EACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
    ],
  });
const liability =
  calTotalValue(accountData, {
    account_category: EACCOUNT_CATEGORY.LIABILITY,
    value_type: EVALUE_TYPE.CREDIT,
    account_type: [
      EACCOUNT_TYPE.CURRENT,
      EACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE,
    ],
  }) -
  calTotalValue(accountData, {
    account_category: EACCOUNT_CATEGORY.LIABILITY,
    value_type: EVALUE_TYPE.DEBIT,
    account_type: [
      EACCOUNT_TYPE.CURRENT,
      EACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE,
    ],
  });
const workingCapitalRatio = (assets / liability) * 100;
function CommonMetrics() {
  return (
    <Container>
      <Title>Five Common Accounting Metics</Title>
      <MetricsList>
        <MetricItem>{`${EMETRICS.REVENUE}:${revenue}`}</MetricItem>
        <MetricItem>{`${EMETRICS.EXPENSE}:${expense}`}</MetricItem>
        <MetricItem>{`${EMETRICS.GROSS_PROFIT_MARGIN}:${grossProfitMagin}`}</MetricItem>
        <MetricItem>{`${EMETRICS.NET_PROFIT_MARGIN}:${netProfitMargin}`}</MetricItem>
        <MetricItem>{`${EMETRICS.WORKING_CAPITAL_RATIO}:${workingCapitalRatio}`}</MetricItem>
      </MetricsList>
    </Container>
  );
}

export default CommonMetrics;
