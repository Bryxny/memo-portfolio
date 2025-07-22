"use client";

import StickyNote from "./StickyNote";
import { projects } from "../lib/projects";
import ContactNote from "./ContactNote";
import ToDoNote from "./ToDoNote";
import Polaroid from "./Polaroid";
import { polaroids } from "../lib/polaroids";
import QuoteNote from "./QuoteNote";
import { useState, useEffect } from "react";
const NotePositions = [
  { x: 50, y: 450, z: 1 },
  { x: 250, y: 450, z: 2 },
  { x: 450, y: 450, z: 3 },
  { x: 650, y: 450, z: 4 },
  { x: 850, y: 450, z: 5 },
];

const polaroidPositions = [
  { x: 1000, y: 0, z: 2, rotation: 12 },
  { x: 850, y: 0, z: 1, rotation: -12 },
  { x: 50, y: 0, z: 2, rotation: -12 },
  { x: 200, y: 0, z: 1, rotation: 12 },
];

const noteColours = [
  "BlueNote.webp",
  "PinkNote.webp",
  "YellowNote.webp",
  "GreenNote.webp",
];

export default function StickyGrid() {
  const completedProjects = projects.filter((p) => p.isCompleted);
  const [showHint, setShowHint] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setShowHint(false), 7000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className="relative flex overflow-hidden"
      style={{ height: "1300px", touchAction: "none" }}
    >
      {showHint && (
        <div className="absolute top-100 left-1/2 transform -translate-x-1/2 text-xs bg-white text-gray-800 px-2 py-1 rounded shadow-md z-10 animate-pulse">
          Tap note to view details
        </div>
      )}
      <div className="m-20">
        <ToDoNote initialX={530} initialY={0} zIndex={1} rotation={0} />
        <ContactNote rotation={7} initialX={900} initialY={350} zIndex={1} />
        <QuoteNote rotation={15} initialX={1000} initialY={550} zIndex={0} />
        {completedProjects.map((project, index) => {
          const rotation = index % 2 === 0 ? -12 : 12;
          const pos = NotePositions[index] || { x: 0, y: 0, z: 1 };
          const colourIndex = index % noteColours.length;
          return (
            <StickyNote
              key={project.id}
              {...project}
              rotation={rotation}
              bgurl={noteColours[colourIndex]}
              initialX={pos.x}
              initialY={pos.y}
              zIndex={pos.z}
            />
          );
        })}
        {polaroids.map((polaroid, index) => {
          const {
            x = 0,
            y = 0,
            z = 1,
            rotation = 0,
          } = polaroidPositions[index] || {};
          return (
            <Polaroid
              key={index}
              url={polaroid.url}
              text={polaroid.text}
              rotation={rotation}
              initialX={x}
              initialY={y}
              zIndex={z}
            />
          );
        })}
      </div>
    </div>
  );
}
