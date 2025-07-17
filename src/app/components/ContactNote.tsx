"use client";
import React from "react";
import Draggable from "./Draggable";

interface ContactNoteProps {
  initialX: number;
  initialY: number;
  zIndex: number;
  rotation: number;
}

export default function ContactNote({
  rotation,
  initialX = 0,
  initialY = 0,
  zIndex = 1,
}: ContactNoteProps) {
  return (
    <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
      {(onMouseDown) => (
        <div
          className={`absolute w-[250px] h-[250px] bg-[url('/WhiteNote.webp')] bg-contain bg-no-repeat p-4 cursor-default transition duration-300 hover:scale-105 hover:z-10 `}
          style={{
            transform: `rotate(${rotation}deg)`,
            zIndex,
          }}
        >
          <img
            src="/Post-it-pin2.png"
            alt="Pin"
            className="absolute w-[140px] h-[70px] top-[-16px] left-[40px] cursor-move"
            draggable={false}
            onMouseDown={onMouseDown}
          />
          <h2 className="handwriting text-2xl font-bold text-gray-800  pr-5 text-center tracking-widest">
            Contact Info
          </h2>
          <ul className="handwriting mt-4 text-center text-2xl space-y-2 pr-9 text-gray-800 mt-10 ">
            <li>bryonydoh@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/bryony-doherty-softdev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-700 hover:text-gray-800"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </Draggable>
  );
}
