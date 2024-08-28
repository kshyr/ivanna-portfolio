import { AboutPage, HomePage } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

interface AboutSectionProps {
  aboutMeParagraph?: AboutPage["aboutMeParagraph"];
  secondParagraphTitle?: AboutPage["secondParagraphTitle"];
  secondParagraph?: AboutPage["secondParagraph"];
  photo: AboutPage["photo"];
  title: HomePage["title"];
}

export default function AboutSection({
  photo,
  title,
  aboutMeParagraph,
  secondParagraph,
  secondParagraphTitle,
}: AboutSectionProps) {
  return (
    <section className="w-full flex flex-col px-4 xl:px-16 gap-12 lg:mb-8">
      <div className="lg:hidden flex flex-col  gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[36px] font-semibold">
            Hi, I’m Ivanka!
            <img
              src="/logo_cat_wide.svg"
              alt="logo-cat-wide"
              className="inline ml-2 mb-3 max-w-[50px] lg:max-w-[100px]"
            />
          </h1>
          <h2 className="text-[16px] text-muted-foreground font-medium uppercase">
            {title}
          </h2>
        </div>
        <div>
          <img
            src={photo ? urlFor(photo).url() : "https://placehold.co/178x234"}
            className="w-[178px] h-[234px] float-left mr-4 mb-1 rounded-xl"
          />

          <div className="float-none">
            <h2 className="font-medium text-[24px] mb-2">About Me</h2>
            <p className="text-muted-foreground text-[16px] font-medium">
              {aboutMeParagraph}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-medium text-[24px] mb-2">
              {secondParagraphTitle}
            </h2>
            <p className="text-muted-foreground text-[16px] font-medium">
              {secondParagraph}
            </p>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex flex-row gap-16 justify-between">
        <img
          src={photo ? urlFor(photo).url() : "https://placehold.co/178x234"}
          className="h-full mb-1 rounded-xl max-w-[553px] w-full"
        />
        <div className="flex flex-col gap-6 max-w-[571px]">
          <div>
            <h1 className="text-[56px] xl:text-[64px] font-semibold">
              Hi, I’m Ivanka!
              <img
                src="/logo_cat_wide.svg"
                alt="logo-cat-wide"
                className="inline ml-2 mb-3 max-w-[50px] lg:max-w-[100px]"
              />
            </h1>
            <h2 className="text-[16px] text-muted-foreground font-medium uppercase">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[24px]">About Me</h2>
            <p className="text-muted-foreground text-[16px] font-medium">
              {aboutMeParagraph}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[24px]">{secondParagraphTitle}</h2>
            <p className="text-muted-foreground text-[16px] font-medium">
              {secondParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
