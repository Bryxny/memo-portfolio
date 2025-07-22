import StickyGrid from "./components/StickyGrid";

export default function Home() {
  return (
    <div
      className="relative mx-auto w-full bg-[url('/Background.webp')] bg-cover overflow-y-auto"
      style={{ height: "1300px", touchAction: "none" }}
    >
      <StickyGrid />
    </div>
  );
}
