import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React from "react";
import { HomePage } from "@/sanity.types";
import { isImageSource } from "@sanity/asset-utils";
import { homePageSingletonName } from "@/sanity/structure";
import { client, sanityFetch } from "@/sanity/lib/client";

interface ProjectsSectionProps {
  projectsParagraphStart: HomePage["projectsParagraphStart"];
  projectsParagraphEnd: HomePage["projectsParagraphEnd"];
  projects: HomePage["projects"];
}

type ProjectImageUrlObject = {
  title: string;
  imageUrl: string;
  transitionBgColor: string;
  url: string;
};

async function getImageUrls(): Promise<ProjectImageUrlObject[]> {
  const query = `*[_type == "${homePageSingletonName}"][0]{
    "titles": projects[].title,
    "imageUrls":projects[].image.asset->url,
    "transitionBgColors":projects[].image.transitionBgColor,
    "urls":projects[].url
  }`;
  const data = await sanityFetch({ query });
  const imageUrlObjs = data.imageUrls.map((url: string, i: number) => ({
    title: data.titles[i],
    imageUrl: url,
    transitionBgColor: data.transitionBgColors[i],
    url: data.urls[i],
  }));
  return imageUrlObjs;
}

export default async function ProjectsSection({
  projectsParagraphStart,
  projectsParagraphEnd,
  projects,
}: ProjectsSectionProps) {
  const imageUrlObjs = await getImageUrls();

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
        {projects?.map((project, i) => {
          const imageUrlObj = imageUrlObjs.find(
            (obj) => obj.title === project.title,
          );
          let imageSrc =
            imageUrlObj?.imageUrl ?? "https://placehold.co/600x400";
          const bgColor = imageUrlObj?.transitionBgColor ?? "#000000";
          return (
            <a
              key={project?.title + "-" + i}
              href={imageUrlObj?.url as string}
              target="_blank"
              className="group"
            >
              <div className="group flex flex-col col-span-1 row-span-1 w-full h-full max-w-xl">
                <div
                  className={cn(
                    "group transition-colors duration-300 w-full border border-black/25 rounded-[20px] md:rounded-[32px] flex items-end justify-end h-full",
                    `group-hover:bg-[var(--hover-bg-color)]`,
                  )}
                  style={{ "--hover-bg-color": bgColor } as React.CSSProperties}
                >
                  <img
                    src={imageSrc}
                    alt={project?.image?.alt}
                    className={cn("object-cover w-full")}
                  />
                </div>
                <div className="flex gap-2 mt-4 items-center opacity-70">
                  {project?.tags?.map((tag, i, arr) => (
                    <React.Fragment key={project?.title + "-" + i + tag}>
                      <span className="uppercase text-xs sm:text-sm md:text-md">
                        {tag}
                      </span>
                      {i !== arr.length - 1 && (
                        <div className="w-[5px] h-[5px] bg-background rounded-full" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <h3 className="text-lg md:text-[40px] group-hover:underline">
                  {project.title}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
