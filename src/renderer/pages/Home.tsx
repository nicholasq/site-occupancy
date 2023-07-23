import MenuBar from "../components/MenuBar";
import {styled} from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
  padding: 1rem 1rem;
`;

export default function Home() {
  return (
    <>
      <MenuBar></MenuBar>
      <Main>
        <div style={{display: "flex", justifyContent: "center"}}>
          You have no data synced
        </div>
      </Main>
    </>
  );
}
