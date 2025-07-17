import StickyGrid from "./components/StickyGrid";

export default function Home() {
  return (
    <div
      className="relative mx-auto w-full bg-[url('/Background.webp')] bg-cover overflow-y-auto overflow-x-hidden"
      style={{ height: "1000px", touchAction: "none" }}
    >
      <StickyGrid />
    </div>
  );
}
