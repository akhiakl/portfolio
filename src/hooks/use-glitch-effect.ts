import { useEffect, useState } from "react";

// types
type CharState = { value: string; glitched: boolean };
type LineState = CharState[];

function parseLines(raw: string[]): LineState[] {
  return raw.map(line =>
    line.split('').map(char => ({ value: char, glitched: false }))
  );
}

export function useGlitchEffect(originalLines: string[]) {
  const [lines, setLines] = useState<LineState[]>(() => parseLines(originalLines));

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function glitchEffect() {
      // Apply glitch
      setLines(prev => {
        const next = prev.map(line => line.map(char => ({ ...char })));
        const numGlitches = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numGlitches; i++) {
          const lineIdx = Math.floor(Math.random() * next.length);

          // Only target binary characters
          const binaryIndices = next[lineIdx]
            .map((char, idx) => ({ char, idx }))
            .filter(({ char }) => char.value === '0' || char.value === '1');

          if (binaryIndices.length === 0) continue;

          const { idx } = binaryIndices[Math.floor(Math.random() * binaryIndices.length)];
          next[lineIdx][idx] = {
            value: next[lineIdx][idx].value === '0' ? '1' : '0',
            glitched: true,
          };
        }

        return next;
      });

      // Revert glitch
      const revertId = setTimeout(() => {
        setLines(parseLines(originalLines)); // reset to original values
      }, Math.random() * 150 + 50);

      // Schedule next glitch
      const nextId = setTimeout(glitchEffect, Math.random() * 2000 + 2000);

      timeouts.push(revertId, nextId);
    }

    const initialId = setTimeout(glitchEffect, 2000);
    timeouts.push(initialId);

    // ✅ Cleanup: cancel all pending timeouts on unmount
    return () => timeouts.forEach(clearTimeout);
  }, []); // originalLines should be referentially stable (useMemo / module-level const)

  return lines;
}