import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React from "react";
import { HomePage } from "@/sanity.types";

interface ProjectsSectionProps {
  projectsParagraphStart: HomePage["projectsParagraphStart"];
  projectsParagraphEnd: HomePage["projectsParagraphEnd"];
  projects: HomePage["projects"];
}

export default function ProjectsSection({
  projectsParagraphStart,
  projectsParagraphEnd,
  projects,
}: ProjectsSectionProps) {
  return (
    <section className="w-full flex flex-col px-4 xl:px-16">
      <div
        className={cn(
          "flex flex-col w-full items-center relative pb-10 pt-24",
          "before:absolute before:top-24 before:left-0 before:right-0 before:bottom-0",
          "before:z-[-1] before:bg-[#243A74] before:rounded-full before:transform",
          "before:scale-[0.4] before:blur-[140px] before:opacity-100",
        )}
      >
        <h1 className="text-[36px] lg:text-xl mb-2 lg:mb-0 font-semibold text-center">
          Projects
        </h1>
        <p className="text-sm lg:text-base max-w-[550px] text-center">
          <span className="opacity-70">{projectsParagraphStart}</span>{" "}
          {projectsParagraphEnd}
        </p>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 bg-foreground text-background w-full place-items-center py-10 px-8",
          "relative before:w-screen before:bg-foreground before:h-full before:absolute before:-z-10",
        )}
      >
        {projects?.map((project, i) => (
          <div
            key={project?.title + "-" + i}
            className="flex flex-col col-span-1 row-span-1 w-full h-full min-h-[400px]"
          >
            <div className="bg-background rounded-4xl flex items-end justify-end p-8 h-full">
              {/*project.image && (
                <Image
                  src={urlFor(project.image)?.url()}
                  alt={project?.title as string}
                  width={300}
                  height={200}
                  className="rounded-4xl"
                />
              )*/}
            </div>
            <div className="flex gap-2 mt-4 items-center opacity-70">
              {project?.tags?.map((tag, i, arr) => (
                <React.Fragment key={project?.title + "-" + i + tag}>
                  <span className="uppercase">{tag}</span>
                  {i !== arr.length - 1 && (
                    <div className="w-[5px] h-[5px] bg-background rounded-full" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <h3 className="text-[40px]">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
