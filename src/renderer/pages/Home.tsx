import MenuBar from "../components/MenuBar";
import Chart from "../components/Chart";
import { styled } from "styled-components";
import { colors } from "../constants";
import { data } from "../fakedata";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
  padding: 1rem 1rem;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 0.4em solid ${colors.red};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ChartNavContainer = styled.div`
  margin-top: 1rem;
  padding: 0;
  height: 100%;
  border: 1px solid yellow;
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
    background-color: yellow;
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
