import MenuBar from "../components/MenuBar";
import Chart from "../components/Chart";
import { chartOptions } from "../components/Chart";
import { styled } from "styled-components";
import { data as fakeData } from "../fakedata";
import { useMemo, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem 0.5rem;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 0.4em solid var(--red);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
`;
const ChartNavContainer = styled.div`
  margin-top: 1rem;
  height: 100%;
  border: var(--borderYellow);
  display: flex;
  justify-content: center;
  align-self: center;
`;
const ChartNavButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: white;

  &:hover {
    background-color: var(--yellow);
    color: black;
    cursor: pointer;
  }
`;

function fetchChartData() {
  return fakeData();
}

export default function Home() {
  const [page, setPage] = useState(0);
  const options = useMemo(
    () => chartOptions("Device Count Per Building - 7/27/2023 - 7/27/2023"),
    [page],
  );
  const data = useMemo(() => fetchChartData(), [page]);

  function handlePreviousPage() {
    if (page === 0) {
      return;
    }
    setPage(page - 1);
  }
  function handleNextPage() {
    // todo: get max page from data
    if (page === 3) {
      return;
    }
    setPage(page + 1);
  }

  return (
    <Container>
      <MenuBar></MenuBar>
      <Main>
        <ChartContainer>
          <Chart data={data} options={options}></Chart>
        </ChartContainer>
        <ChartNavContainer>
          <ChartNavButton onClick={handlePreviousPage}>Previous</ChartNavButton>
          <ChartNavButton>{page + 1} of 4</ChartNavButton>
          <ChartNavButton onClick={handleNextPage}>Next</ChartNavButton>
        </ChartNavContainer>
      </Main>
    </Container>
  );
}
