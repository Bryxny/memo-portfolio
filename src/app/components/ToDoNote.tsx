"use client";
import { projects } from "../lib/projects";
import Draggable from "./Draggable";

interface ToDoNoteProps {
  initialX: number;
  initialY: number;
  zIndex: number;
  rotation: number;
}

export default function ToDoNote({
  initialX = 0,
  initialY = 0,
  zIndex = 1,
  rotation = 0,
}: ToDoNoteProps) {
  return (
    <Draggable initialX={initialX} initialY={initialY} zIndex={zIndex}>
      {(onMouseDown) => (
        <div
          className={`absolute select-none w-[250px] h-[250px]  bg-[url('/WhiteNote.webp')] bg-contain bg-no-repeat p-4 pr-10 transition-transform duration-300 hover:scale-105 rotate-[${rotation}deg] z-${zIndex}`}
        >
          <img
            src="/Post-it-pin2.png"
            alt="Pin"
            className="absolute w-[140px] h-[70px] top-[-16px] left-[40px] cursor-move"
            draggable={false}
            onMouseDown={onMouseDown}
          />
          <h2 className="handwriting text-2xl font-bold text-black text-center tracking-widest">
            To-do list
          </h2>
          <ul className="mt-4 space-y-2">
            {projects.map((project, i) => (
              <li
                key={i}
                className={`handwriting text-lg text-black tracking-wide ${
                  project.isCompleted ? "line-through" : ""
                }`}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Draggable>
  );
}
