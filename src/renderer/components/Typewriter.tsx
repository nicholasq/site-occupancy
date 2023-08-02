import { styled } from "styled-components";
import { theme } from "../constants";
import { useEffect, useRef } from "react";

const StatusSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 1rem 2rem;
  font-size: ${theme.font.size};
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

  useEffect(() => {
    let typingId: number;
    let blinkId: number;
    const typeWriter = () => {
      if (i < text.length) {
        typedText += text.charAt(i);
        if (ref.current) ref.current.innerHTML = typedText;
        i++;
        // @ts-ignore ts thinks this file runs in node
        typingId = setTimeout(typeWriter, speed);
      } else {
        // Wait for 2 seconds after reaching end of the string, then reset.
        // @ts-ignore ts thinks this file runs in node
        blinkId = setTimeout(() => {
          i = 0;
          typedText = "";
          typeWriter();
        }, 2000);
      }
    };
    typeWriter();

    return () => {
      if (typingId) clearTimeout(typingId);
      if (blinkId) clearTimeout(blinkId);
    };
  }, []);

  return (
    <StatusSection style={style}>
      <span ref={ref}></span>
    </StatusSection>
  );
}
