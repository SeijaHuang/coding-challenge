import styled from "@emotion/styled";
import { EMETRICS } from "../constants/metrics";
import data from "../data.json";
import { IAccount } from "../interface/account";

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
console.log(accountData);

function CommonMetrics() {
  return (
    <Container>
      <Title>Five Common Accounting Metics</Title>
      <MetricsList>
        <MetricItem>{EMETRICS.REVENUE}</MetricItem>
        <MetricItem>{EMETRICS.EXPENSE}</MetricItem>
        <MetricItem>{EMETRICS.GROSS_PROFIT_MARGIN}</MetricItem>
        <MetricItem>{EMETRICS.NET_PROFIT_MARGIN}</MetricItem>
        <MetricItem>{EMETRICS.WORKING_CAPITAL_RATIO}</MetricItem>
      </MetricsList>
    </Container>
  );
}

export default CommonMetrics;
