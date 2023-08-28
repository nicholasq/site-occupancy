import { styled } from "styled-components";
import Typewriter from "./Typewriter";
import TextBlinker from "./TextBlinker";
import { useContext, useState } from "react";
import HoverDropdown from "./HoverDropdown";
import type { MenuItem } from "../../types";
import { ChartContext } from "../context/ChartContext";
import Modal from "./Modal";

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
  font-size: var(--fontSizeUI);
`;
const RightDiv = styled.div`
  display: flex;
  border: var(--borderYellow);
  justify-content: stretch;
  font-size: var(--fontSizeUI);
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

export interface MenuBarProps {
  onUpdateLocationId: (locationId: string) => void;
}

export default function MenuBar() {
  const { locations, locationId, locationName, setLocationId } =
    useContext(ChartContext);
  const [syncing, setSyncing] = useState(false);

  function toggleSync() {
    setSyncing(!syncing);
  }

  const locationItems =
    locations?.map((loc) => ({
      label: loc.siteName,
      value: loc.siteId,
    })) ?? [];

  const shortLocationName =
    locationName?.length > 50
      ? locationName?.substring(0, 50) + "..."
      : locationName;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <MainDiv>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <h2>Settings</h2>
        </Modal>
      )}
      <LeftDiv>
        <StatusContainer>{shortLocationName}</StatusContainer>
      </LeftDiv>
      <RightDiv>
        <HoverDropdown items={locationItems} onSelect={setLocationId} />
        <MenuItem onClick={toggleSync}>Sync</MenuItem>
        <MenuItem onClick={handleOpen}>Settings</MenuItem>
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
