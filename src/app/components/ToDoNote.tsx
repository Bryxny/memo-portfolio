export default function ToDoNote() {
  return (
    <div className="relative w-[450px] h-[450px] bg-[url('/Post-it-white.webp')] bg-contain pt-26 pr-34 pl-30">
      <img
        src="/Post-it-pin.webp"
        alt="Pin"
        className="absolute top-0 left-1"
      />
      <h2 className="handwriting text-2xl font-bold text-black text-center tracking-widest">
        To-do list
      </h2>
      <ul className="mt-4 space-y-2">
        {["News website", "Cooking Assistant", "Workout Gen"].map((item, i) => (
          <li
            key={i}
            className="handwriting text-lg text-black line-through tracking-wide"
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className="mt-4 space-y-2">
        {["Portfolio", "Deadline tool"].map((item, i) => (
          <li key={i} className="handwriting text-lg text-black tracking-wide">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
