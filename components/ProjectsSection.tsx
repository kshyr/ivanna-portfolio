import { cn } from "@/lib/utils";
import Image from "next/image";

type Project = {
  tags: string[];
  title: string;
};

const projects: Project[] = [
  {
    title: "PixieBank",
    tags: ["UX UI Design", "Online Banking", "Case Study"],
  },
  ...new Array(3).fill({
    title: "Title",
    tags: ["UX UI Design", "Name", "Case Study"],
  }),
];

export default function ProjectsSection() {
  return (
    <section className="w-full flex flex-col">
      <div
        className={cn(
          "flex flex-col w-full items-center relative pb-10 pt-24",
          "before:absolute before:top-24 before:left-0 before:right-0 before:bottom-0",
          "before:z-[-1] before:bg-[#243A74] before:rounded-full before:transform",
          "before:scale-[0.4] before:blur-[140px] before:opacity-100",
        )}
      >
        <h1 className="text-xl font-semibold text-center">Projects</h1>
        <p className="text-sm max-w-[550px] text-center">
          <span className="opacity-70">
            All projects are created step by step relying on
          </span>{" "}
          Human-Centered Design, the best framework for creating delightful
          experience and interactions between computer and human
        </p>
      </div>
      <div
        className={cn(
          "grid grid-cols-2 grid-rows-2 gap-8 bg-foreground text-background w-full h-[1080px] place-items-center py-10 px-24",

          "relative before:w-screen before:bg-foreground before:h-full before:absolute before:-z-10",
        )}
      >
        {projects?.map((project, i) => {
          return (
            <div
              key={project?.title + "-" + i}
              className="flex flex-col col-span-1 row-span-1 w-full h-full"
            >
              <div className="bg-background rounded-4xl flex items-end justify-end p-8 h-full">
                <Image
                  width={78}
                  height={56}
                  src="/logo_cat_wide.svg"
                  alt="logo-cat-wide"
                />
              </div>
              <div className="flex gap-2 mt-4 items-center opacity-70">
                {project.tags.map((tag, i) => {
                  return (
                    <>
                      <span
                        key={project?.title + "-" + i + tag}
                        className="uppercase"
                      >
                        {tag}
                      </span>
                      {i !== project.tags.length - 1 && (
                        <div className="w-[5px] h-[5px] bg-background rounded-full" />
                      )}
                    </>
                  );
                })}
              </div>
              <h3 className="text-lg">{project.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
