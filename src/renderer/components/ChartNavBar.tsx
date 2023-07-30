import { styled } from "styled-components";
import { useEffect, useState } from "react";

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

export default function ChartNavBar({
  page,
  onPageChange,
}: {
  page: number;
  onPageChange: (op: number) => void;
}) {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    window.electron.getPageCount().then((count: number) => setPageSize(count));
  }, []);

  function handlePageChange(op: number) {
    if (page === 0 && op === -1) {
      return;
    }
    if (page === pageSize - 1 && op === 1) {
      return;
    }
    onPageChange(page + op);
  }

  return (
    <ChartNavContainer>
      <ChartNavButton
        onClick={() => {
          handlePageChange(-1);
        }}
      >
        Previous
      </ChartNavButton>
      <ChartNavButton>
        {page + 1} of {pageSize}
      </ChartNavButton>
      <ChartNavButton
        onClick={() => {
          handlePageChange(1);
        }}
      >
        Next
      </ChartNavButton>
    </ChartNavContainer>
  );
}
