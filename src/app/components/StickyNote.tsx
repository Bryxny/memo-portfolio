interface StickyNoteProps {
  id: string;
  title: string;
  description: string;
  techStack?: string[];
}

export default function StickyNote({
  id,
  title,
  description,
  techStack,
}: StickyNoteProps) {
  return (
    <div className="relative w-[450px] h-[450px] bg-[url('/Post-it-white.webp')] bg-contain pt-26 pr-34 pl-30">
      <img
        src="/Post-it-pin.webp"
        alt="Pin"
        className="absolute top-0 left-1"
      />
      <h2 className="handwriting text-2xl font-bold text-black text-center tracking-widest">
        {title}
      </h2>
      <p className="handwriting tracking-wide text-l mt-2 text-black">
        {description}
      </p>
      {techStack && (
        <ul className="mt-2 text-xs text-black list-disc list-inside">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
