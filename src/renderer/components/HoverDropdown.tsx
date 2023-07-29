import { styled } from "styled-components";
import React, { useState } from "react";

const RootDiv = styled.div`
  --backgroundColor: transparent;
  position: relative;
  display: inline-block;
  align-self: center;
  height: 100%;
  color: var(--textColor);
  background-color: var(--backgroundColor);

  &:hover {
    --textColor: black;
    --backgroundColor: var(--yellow);
  }
`;
const Button = styled.button`
  background-color: var(--backgroundColor);
  height: 100%;
  color: var(--textColor);
  border: none;
  padding: 0 2rem;
  font-size: var(--fontSizeUI);
  cursor: pointer;
`;
const Dropdown = styled.div`
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  border: var(--borderYellow);
  color: black;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  font-size: var(--fontSizeUI);
  z-index: 1;
`;
const Item = styled.p`
  padding: 0 2rem;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export interface HoverDropdownProps {
  items: { label: string; value: string }[];
}

export default function HoverDropdown({ items }: HoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RootDiv
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button>Location</Button>
      {isOpen && (
        <Dropdown>
          {items.map((item) => (
            <Item key={item.value}>{item.label}</Item>
          ))}
        </Dropdown>
      )}
    </RootDiv>
  );
}
