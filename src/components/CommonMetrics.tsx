import styled from "@emotion/styled";
import { EMETRICS } from "../constants/metrics";
import data from "../../data.json";
import { IAccount } from "../interface/account";

import {
  getExpense,
  getGrossProfitMargin,
  getNetProfitMargin,
  getRevenue,
  getWorkingCapitalRatio,
} from "../utils/calMetric";
import { formatCurrency, formatPercentage } from "../utils/dataFormat";
import { EACCOUNT_CURRENCY } from "../constants/account";

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
const revenue = formatCurrency(getRevenue(accountData), EACCOUNT_CURRENCY.AUD);
const expense = formatCurrency(getExpense(accountData), EACCOUNT_CURRENCY.AUD);
const grossProfitMargin = formatPercentage(getGrossProfitMargin(accountData));
const netProfitMargin = formatPercentage(getNetProfitMargin(accountData));
const workingCapitalRatio = formatPercentage(
  getWorkingCapitalRatio(accountData)
);

function CommonMetrics() {
  return (
    <Container>
      <Title>Five Common Accounting Metics</Title>
      <MetricsList>
        <MetricItem>{`${EMETRICS.REVENUE}:${revenue}`}</MetricItem>
        <MetricItem>{`${EMETRICS.EXPENSE}:${expense}`}</MetricItem>
        <MetricItem>{`${EMETRICS.GROSS_PROFIT_MARGIN}:${grossProfitMargin}`}</MetricItem>
        <MetricItem>{`${EMETRICS.NET_PROFIT_MARGIN}:${netProfitMargin}`}</MetricItem>
        <MetricItem>{`${EMETRICS.WORKING_CAPITAL_RATIO}:${workingCapitalRatio}`}</MetricItem>
      </MetricsList>
    </Container>
  );
}

export default CommonMetrics;
