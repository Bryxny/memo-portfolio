"use client";
import React from "react";
import Draggable from "./Draggable";

interface QuoteNoteProps {
  initialX: number;
  initialY: number;
  zIndex: number;
  rotation: number;
}

export default function QuoteNote({
  rotation,
  initialX = 0,
  initialY = 0,
  zIndex = 1,
}: QuoteNoteProps) {
  return (
    <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
      {(onMouseDown) => (
        <div
          className={`absolute w-[250px] h-[250px] bg-[url('/PinkNote.webp')] bg-contain bg-no-repeat p-4 cursor-default transition duration-300 hover:scale-105 hover:z-10 `}
          style={{
            transform: `rotate(${rotation}deg)`,
            zIndex,
          }}
        >
          <img
            src="/Tape.webp"
            alt="Pin"
            className="absolute w-[70px] h-[100px] top-[-40px] left-[80px] cursor-move"
            draggable={false}
            onMouseDown={onMouseDown}
          />
          <h2 className="handwriting mt-15 text-2xl font-bold text-gray-800 pr-5 text-center tracking-widest">
            Don't wish for it. Work for it.
          </h2>
        </div>
      )}
    </Draggable>
  );
}
