import { cn } from "@/lib/utils";
import Carousel from "./Carousel";

export default function SkillsSection() {
  return (
    <section className="w-full flex flex-col px-16">
      <div className="py-16">
        <h1 className="text-xl font-semibold">Skills</h1>
        <p className="text-sm max-w-[550px]">
          <span className="opacity-70">
            Bringing a keen eye for design and a
          </span>{" "}
          personalized touch to every project
        </p>
      </div>
      <div
        className={cn(
          "grid gap-8 bg-foreground text-background w-full place-items-center py-10 px-24 ",

          "relative before:w-screen before:bg-foreground before:h-full before:absolute before:-z-20",
        )}
      >
        <Carousel />
      </div>
    </section>
  );
}
