import { styled } from "styled-components";
import { uiFontSize } from "../constants";
import { useRef } from "react";

const StatusSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 1rem 2rem;
  font-size: ${uiFontSize};
  flex: var(--flex, 0 1 auto);
`;

export default function Typewriter({
  text,
  speed,
  style,
}: {
  text: string;
  speed?: number;
  style?: { [key: string]: string | number };
}) {
  const ref = useRef<HTMLSpanElement>(null);

  let typedText = "";
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typedText += text.charAt(i);
      if (ref.current) ref.current.innerHTML = typedText;
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Wait for 2 seconds after reaching end of the string, then reset.
      setTimeout(() => {
        i = 0;
        typedText = "";
        typeWriter();
      }, 2000);
    }
  };
  typeWriter();

  return (
    <StatusSection style={style}>
      <span ref={ref}></span>
    </StatusSection>
  );
}
