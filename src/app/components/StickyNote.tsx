"use client";
import React, { useState } from "react";
import Draggable from "./Draggable";
import StickyNoteBack from "./StickyNoteBack";

interface StickyNoteProps {
  title: string;
  description: string;
  techStack?: string[];
  rotation: number;
  zIndex?: number;
  bgurl: string;
  initialX?: number;
  initialY?: number;
  longdescription: string;
  features: string[];
  link: string;
  img: string;
}

export default function StickyNote({
  title,
  description,
  techStack,
  rotation,
  zIndex = 1,
  bgurl,
  initialX = 0,
  initialY = 0,
  longdescription,
  features,
  link,
  img,
}: StickyNoteProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded && (
        <div onClick={() => setExpanded(false)} className="animated-back">
          <StickyNoteBack
            title={title}
            longdescription={longdescription}
            techStack={techStack}
            features={features}
            link={link}
            img={img}
          />
        </div>
      )}
      {!expanded && (
        <div onClick={() => setExpanded(true)}>
          <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
            {(onMouseDown) => (
              <div
                className={`absolute select-none w-[250px] h-[250px] bg-contain bg-no-repeat p-4 pr-10 transition-transform duration-300 hover:scale-105`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  backgroundImage: `url(${bgurl})`,
                  zIndex,
                }}
              >
                <img
                  src="/Post-it-pin2.png"
                  alt="Pin"
                  className="absolute w-[140px] h-[70px] top-[-16px] left-[40px] cursor-move"
                  draggable={false}
                  onMouseDown={onMouseDown}
                  onClick={(e) => e.stopPropagation()}
                />
                <h2 className="handwriting text-2xl font-bold text-gray-800  text-center tracking-widest cursor-default">
                  {title}
                </h2>
                <p className="handwriting tracking-wide text-l mt-2 text-gray-800 ">
                  {description}
                </p>
                {techStack && (
                  <ul className="text-s handwriting text-gray-800  list-disc list-inside leading-tight">
                    {techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </Draggable>
        </div>
      )}
    </>
  );
}
