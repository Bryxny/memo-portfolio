import React from "react";
import Draggable from "./Draggable";

type PolaroidProps = {
  url: string;
  text: string;
  rotation: number;
  initialX: number;
  initialY: number;
  zIndex: number;
};

export default function Polaroid({
  url,
  text,
  rotation,
  initialX = 0,
  initialY = 0,
  zIndex = 1,
}: PolaroidProps) {
  return (
    <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
      {(onMouseDown) => (
        <div
          onMouseDown={onMouseDown}
          className="absolute w-[250px] h-[250px] bg-contain bg-no-repeat flex items-end p-4 transition duration-300 hover:scale-105 hover:z-10"
          style={{
            transform: `rotate(${rotation}deg)`,
            backgroundImage: `url(${url})`,
            zIndex,
          }}
        >
          <p className="handwriting text-m mb-2 ml-1 text-black">{text}</p>
        </div>
      )}
    </Draggable>
  );
}
