import styled from "@emotion/styled";

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
function CommonMetrics() {
  return (
    <Container>
      <Title>Five Common Accounting Metics</Title>
      <MetricsList>
        <MetricItem>Revenue</MetricItem>
        <MetricItem>Expenses</MetricItem>
        <MetricItem>Profit</MetricItem>
        <MetricItem>Assets</MetricItem>
        <MetricItem>Liabilities</MetricItem>
      </MetricsList>
    </Container>
  );
}

export default CommonMetrics;
