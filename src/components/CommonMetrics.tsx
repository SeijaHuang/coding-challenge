import styled from "@emotion/styled";
import { EMETRICS } from "../constants/metrics";
import data from "../../data.json";
import { IAccount } from "../interface/account";
import { EACCOUNT_CATEGORY } from "../constants/account";

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

function calculateRevenueAndExpense(
  accountData: IAccount[],
  categoryName: EACCOUNT_CATEGORY.EXPENSE | EACCOUNT_CATEGORY.REVENUE
) {
  return accountData
    .filter((account) => account.account_category === categoryName)
    .reduce((acc, account) => acc + account.total_value, 0);
}

const revenue = calculateRevenueAndExpense(
  accountData,
  EACCOUNT_CATEGORY.REVENUE
);
const expense = calculateRevenueAndExpense(
  accountData,
  EACCOUNT_CATEGORY.EXPENSE
);

function CommonMetrics() {
  return (
    <Container>
      <Title>Five Common Accounting Metics</Title>
      <MetricsList>
        <MetricItem>{`${EMETRICS.REVENUE}:${revenue}`}</MetricItem>
        <MetricItem>{`${EMETRICS.EXPENSE}:${expense}`}</MetricItem>
        <MetricItem>{EMETRICS.GROSS_PROFIT_MARGIN}</MetricItem>
        <MetricItem>{EMETRICS.NET_PROFIT_MARGIN}</MetricItem>
        <MetricItem>{EMETRICS.WORKING_CAPITAL_RATIO}</MetricItem>
      </MetricsList>
    </Container>
  );
}

export default CommonMetrics;
