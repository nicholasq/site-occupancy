import {styled} from "styled-components";

const MainDiv = styled.div`
  display: flex;
  height: 3rem;
  padding: 2px;
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
const RightDiv = styled.div`
  display: flex;
  flex: 1;
`;
const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  list-style: none;
`;
const MenuItem = styled.li`
  display: flex;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: yellow;
    color: black;
    cursor: pointer;
  }
`;

export default function MenuBar() {
  return (
    <MainDiv>
      <LeftDiv></LeftDiv>
      <RightDiv>
        <MenuList>
          <MenuItem>Sync</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </RightDiv>
    </MainDiv>
  );
}
