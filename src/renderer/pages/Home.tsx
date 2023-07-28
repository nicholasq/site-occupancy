import MenuBar from "../components/MenuBar";
import Chart from "../components/Chart";
import { styled } from "styled-components";
import { colors } from "../constants";
import { data } from "../fakedata";

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
  border: 0.4em solid ${colors.red};
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
    background-color: var(--backgroundYellow);
    color: black;
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <Container>
      <MenuBar></MenuBar>
      <Main>
        <ChartContainer>
          <Chart data={data}></Chart>
        </ChartContainer>
        <ChartNavContainer>
          <ChartNavButton>Previous</ChartNavButton>
          <ChartNavButton>Next</ChartNavButton>
        </ChartNavContainer>
      </Main>
    </Container>
  );
}
