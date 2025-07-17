import React, { useRef } from "react";
import { useDraggable } from "../hooks/useDraggable";

interface DraggableProps {
  initialX?: number;
  initialY?: number;
  zIndex?: number;
  children: (
    onMouseDown: (e: React.MouseEvent) => void,
    ref: React.RefObject<HTMLDivElement | null>
  ) => React.ReactNode;
}

export default function Draggable({
  initialX = 0,
  initialY = 0,
  zIndex = 1,
  children,
}: DraggableProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { position, onMouseDown } = useDraggable(initialX, initialY);

  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex,
      }}
      className="absolute"
    >
      {children(onMouseDown, ref)}
    </div>
  );
}
