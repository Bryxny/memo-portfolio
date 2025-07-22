import { useEffect } from "react";

interface StickyNoteBackProps {
  title: string;
  techStack?: string[];
  longdescription: string;
  features: string[];
  link: string;
  img: string;
}

export default function StickyNoteBack({
  title,
  techStack,
  longdescription,
  features,
  link,
  img,
}: StickyNoteBackProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/30 flex items-start justify-center overflow-auto pt-10 pb-20">
      <div
        className="bg-white w-[800px] min-h-[800px] max-w-full p-6 shadow-lg border border-gray-300 rounded-xl overflow-auto"
        style={{ backgroundColor: "#efecec" }}
      >
        <p className="text-2xl font-bold">{title}</p>
        <img src={img} className="w-full max-w-md my-4" />
        <p className="mb-4">{longdescription}</p>

        <ul className="mb-4 list-disc list-inside">
          <li className="font-semibold">Features:</li>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <ul className="mb-4 list-disc list-inside">
          <li className="font-semibold">Techstack:</li>
          {techStack?.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
