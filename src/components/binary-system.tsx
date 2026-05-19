'use client';
import { useGlitchEffect } from "@/hooks/use-glitch-effect";
import React from "react";

const BINARY_LINES = [
    '01000001001',
    '01001011110',
    '01001000001',
    '01001001100',
    '01001100010',
];

// In your component — drop-in replacement, no ref needed
function BinaryPanel() {
    const lines = useGlitchEffect(BINARY_LINES);

    return (
        <div className="absolute right-0 top-0 hidden h-full w-64 border-outline-variant/30 md:block">
            <div className="binary-glow h-1/3 border-outline-variant/30 p-4 font-mono text-[13px] leading-relaxed text-surface-variant">
                {lines.map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                        {line.map((char, charIdx) =>
                            char.glitched ? (
                                <span key={charIdx} className="text-primary-container">
                                    {char.value}
                                </span>
                            ) : (
                                <React.Fragment key={charIdx}>{char.value}</React.Fragment>
                            )
                        )}
                        {lineIdx < lines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default BinaryPanel;