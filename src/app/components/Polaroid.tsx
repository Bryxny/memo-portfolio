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
          className={` absolute rotate-[${rotation}deg] w-[250px] h-[250px] bg-${url} bg-contain bg-no-repeat flex items-end p-4 transition duration-300 hover:scale-105 hover:z-10`}
          onMouseDown={onMouseDown}
        >
          <p className="handwriting text-m text-black">{text}</p>
        </div>
      )}
    </Draggable>
  );
}
