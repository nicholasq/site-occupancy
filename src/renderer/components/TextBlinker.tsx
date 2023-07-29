import { styled } from "styled-components";
import { theme } from "../constants";

const BlinkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 1rem 2rem;
  font-size: ${theme.font.size};
  flex: var(--flex, 0 1 auto);
`;

export default function TextBlinker({
  text,
  style,
}: {
  text: string;
  style?: { [key: string]: string | number };
}) {
  return <BlinkSection style={style}>{text}</BlinkSection>;
}
