import { styled } from "styled-components";
import { useContext } from "react";
import { ChartContext } from "../context/ChartContext";

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

export default function ChartNavBar() {
  const { pageNumber, nextPage, prevPage, pageCount } =
    useContext(ChartContext);

  return (
    <ChartNavContainer>
      <ChartNavButton onClick={prevPage}>Previous</ChartNavButton>
      <ChartNavButton>
        {pageNumber + 1} of {pageCount}
      </ChartNavButton>
      <ChartNavButton onClick={nextPage}>Next</ChartNavButton>
    </ChartNavContainer>
  );
}
