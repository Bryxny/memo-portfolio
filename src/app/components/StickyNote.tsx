"use client";
import React from "react";
import Draggable from "./Draggable";

interface StickyNoteProps {
  id: string;
  title: string;
  description: string;
  techStack?: string[];
  rotation: number;
  zIndex?: number;
  bgurl: string;
  initialX?: number;
  initialY?: number;
}

export default function StickyNote({
  id,
  title,
  description,
  techStack,
  rotation,
  zIndex = 1,
  bgurl,
  initialX = 0,
  initialY = 0,
}: StickyNoteProps) {
  return (
    <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
      {(onMouseDown) => (
        <div
          className={`absolute select-none w-[250px] h-[250px] bg-${bgurl} bg-contain bg-no-repeat p-4 pr-10 transition-transform duration-300 hover:scale-105 rotate-[${rotation}deg] z-${zIndex}`}
        >
          <img
            src="/Post-it-pin2.png"
            alt="Pin"
            className="absolute w-[140px] h-[70px] top-[-16px] left-[40px] cursor-move"
            draggable={false}
            onMouseDown={onMouseDown}
          />
          <h2 className="handwriting text-2xl font-bold text-black text-center tracking-widest cursor-default">
            {title}
          </h2>
          <p className="handwriting tracking-wide text-l mt-2 text-black">
            {description}
          </p>
          {techStack && (
            <ul className="mt-2 text-xs text-black list-disc list-inside">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Draggable>
  );
}
