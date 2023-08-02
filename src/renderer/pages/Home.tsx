import MenuBar from "../components/MenuBar";
import Chart from "../components/Chart";
import { styled } from "styled-components";
import ChartNavBar from "../components/ChartNavBar";
import { ChartContextProvider } from "../context/ChartContext";

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

export default function Home() {
  return (
    <Container>
      <ChartContextProvider>
        <MenuBar />
        <Main>
          <ChartContainer>
            <Chart />
          </ChartContainer>
          <ChartNavBar />
        </Main>
      </ChartContextProvider>
    </Container>
  );
}
