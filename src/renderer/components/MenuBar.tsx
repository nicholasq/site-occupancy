import { styled } from "styled-components";
import Typewriter from "./Typewriter";
import TextBlinker from "./TextBlinker";
import { useEffect, useState } from "react";
import type { HoverDropdownProps } from "./HoverDropdown";
import HoverDropdown from "./HoverDropdown";

const MainDiv = styled.div`
  display: flex;
  height: 3rem;
  padding: 2px;
  justify-content: center;
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const RightDiv = styled.div`
  display: flex;
  border: var(--borderYellow);
  justify-content: stretch;
`;
const MenuItem = styled.button<{
  $bgHover?: string;
}>`
  display: flex;
  padding: 1rem 2rem;
  font-size: var(--fontSizeUI);
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: var(--textColor);

  &:hover {
    background-color: var(${(props) => props.$bgHover || "--yellow"});
    color: black;
    cursor: pointer;
  }
`;
const StatusContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function MenuBar() {
  const [syncing, setSyncing] = useState(false);
  const [locationItems, setLocationItems] = useState<
    HoverDropdownProps["items"]
  >([]);

  useEffect(() => {
    window.electron.getLocations().then((locs) => {
      setLocationItems(
        locs.map((loc) => ({ label: loc.siteName, value: loc.siteId })),
      );
    });
  }, []);

  function toggleSync() {
    setSyncing(!syncing);
  }

  return (
    <MainDiv>
      <LeftDiv></LeftDiv>
      <RightDiv>
        <HoverDropdown items={locationItems} />
        <MenuItem onClick={toggleSync}>Sync</MenuItem>
        <MenuItem>Settings</MenuItem>
      </RightDiv>
      <StatusContainer>
        {syncing && (
          <Typewriter text="Syncing..." speed={100} style={{ "--flex": 1 }} />
        )}
        {syncing && (
          <TextBlinker text="Next Sync: 12pm" style={{ "--flex": 1 }} />
        )}
      </StatusContainer>
    </MainDiv>
  );
}
