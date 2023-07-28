import { styled } from "styled-components";
import Typewriter from "./Typewriter";
import TextBlinker from "./TextBlinker";
import { useState } from "react";

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
  display: flex;
  margin: 0;
  padding: 0;
  border: var(--borderYellow);
  list-style: none;
`;
const MenuItem = styled.li`
  display: flex;
  margin: 0;
  padding: 1rem 2rem;
  font-size: var(--fontSizeUI);
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--backgroundYellow);
    color: black;
    cursor: pointer;
  }
`;

export default function MenuBar() {
  const [syncing, setSyncing] = useState(false);

  function sync() {
    setSyncing(!syncing);
  }

  return (
    <MainDiv>
      <LeftDiv></LeftDiv>
      <RightDiv>
        <MenuList>
          <MenuItem onClick={sync}>Sync</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
        {syncing && (
          <Typewriter text="Syncing..." speed={100} style={{ "--flex": 1 }} />
        )}
        {syncing && (
          <TextBlinker text="Next Sync: 12pm" style={{ "--flex": 1 }} />
        )}
      </RightDiv>
    </MainDiv>
  );
}
