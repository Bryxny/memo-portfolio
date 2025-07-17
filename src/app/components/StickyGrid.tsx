"use client";

import StickyNote from "./StickyNote";
import { projects } from "../lib/projects";
import ContactNote from "./ContactNote";
import ToDoNote from "./ToDoNote";
import Polaroid from "./Polaroid";

const NotePositions = [
  { x: 50, y: 350, z: 1 },
  { x: 250, y: 350, z: 2 },
  { x: 450, y: 350, z: 3 },
  { x: 650, y: 350, z: 4 },
  { x: 850, y: 350, z: 5 },
];
export default function StickyGrid() {
  const completedProjects = projects.filter((p) => p.isCompleted);

  return (
    <div className="relative flex">
      <div className="m-20">
        <ToDoNote initialX={530} initialY={0} zIndex={1} rotation={0} />
        <ContactNote rotation={7} initialX={1000} initialY={350} zIndex={1} />
        {completedProjects.map((project, index) => {
          const rotation = index % 2 === 0 ? -12 : 12;
          const pos = NotePositions[index] || { x: 0, y: 0, z: 1 };
          return (
            <StickyNote
              key={project.id}
              {...project}
              rotation={rotation}
              bgurl={"[url('/WhiteNote.webp')]"}
              initialX={pos.x}
              initialY={pos.y}
              zIndex={pos.z}
            />
          );
        })}
        <Polaroid
          url={"[url('/Polaroid1.webp')]"}
          text={"Cinder (not) helping me work"}
          rotation={12}
          initialX={1000}
          initialY={0}
          zIndex={2}
        />
        <Polaroid
          url={"[url('/Polaroid1.webp')]"}
          text={"Cinder (not) helping me work"}
          rotation={-12}
          initialX={850}
          initialY={0}
          zIndex={1}
        />
        <Polaroid
          url={"[url('/Polaroid1.webp')]"}
          text={"Cinder (not) helping me work"}
          rotation={-12}
          initialX={50}
          initialY={0}
          zIndex={2}
        />
        <Polaroid
          url={"[url('/Polaroid1.webp')]"}
          text={"Cinder (not) helping me work"}
          rotation={12}
          initialX={200}
          initialY={0}
          zIndex={1}
        />
      </div>
    </div>
  );
}
