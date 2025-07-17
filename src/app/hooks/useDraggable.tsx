import { useState, useRef, useEffect } from "react";

export function useDraggable(
  initialX = 0,
  initialY = 0,
  onDragEnd?: (pos: { x: number; y: number }) => void
) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  }

  function onMouseMove(e: MouseEvent) {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  }

  function onMouseUp() {
    if (dragging.current) {
      dragging.current = false;
      if (onDragEnd) {
        onDragEnd(position);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [position]);

  return { position, onMouseDown };
}
