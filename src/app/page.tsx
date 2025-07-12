import StickyNote from "./components/StickyNote";
import { projects } from "./lib/projects";
import ToDoNote from "./components/ToDoNote";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative max-w-7xl mx-auto h-[1000px] bg-[url('/cork2.jpg')] bg-white bg-no-repeat bg-contain bg-top flex flex-col">
        <div className="flex justify-center items-center h-1/2">
          <ToDoNote />
        </div>
        <div className="relative h-1/2">
          {projects.map((project, index) => {
            const rotation =
              index % 2 === 0 ? "-rotate-[12deg]" : "rotate-[12deg]";
            return (
              <div
                key={project.id}
                className={`absolute ${rotation}`}
                style={{
                  left: `${index * 200}px`,
                  top: `-70px`,
                  zIndex: index,
                }}
              >
                <StickyNote {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
