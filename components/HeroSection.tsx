import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HomePage } from "@/sanity.types";

interface HeroSectionProps {
  title: HomePage["title"];
  heroParagraph: HomePage["heroParagraph"];
  heroImages: HomePage["heroImages"];
}

export default function HeroSection({
  title,
  heroParagraph,
  heroImages,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full justify-between px-4 xl:px-16 lg:pt-24 gap-8">
      <div className="flex gap-2 flex-col ">
        <div>
          <h1 className="text-lg lg:text-xl font-semibold leading-[48px] whitespace-nowrap">
            Ivanna Pavlyk
          </h1>
          <h2 className="text-lg lg:text-xl font-semibold">
            UX/UI
            <Image
              width={34}
              height={51}
              src="/logo_cat_narrow.svg"
              alt="logo-cat-narrow"
              className="inline mx-4 lg:mx-8 mb-2"
            />
            Designer
          </h2>
        </div>
        <h3 className="font-medium mt-1 uppercase">{title}</h3>
        <p className="max-w-xl opacity-70 text-sm lg:text-base">
          {heroParagraph}
        </p>
      </div>
      <div className="rounded-4xl flex items-center md:justify-end gap-8">
        {/*heroImages && heroImages[0] && (
          <Image
            src={urlFor(heroImages[0]).url()}
            alt="Hero image"
            width={530}
            height={530}
            className="rounded-4xl"
          />
        )*/}
        <div className="relative max-w-full min-h-full flex items-center xl:max-w-[528px]">
          <img
            src="/frame2.png"
            alt="Hero image"
            className="rounded-lg aspect-auto"
          />
        </div>
        <div className="hidden sm:flex flex-col gap-4">
          <div className="w-16 md:w-12 lg:w-16 h-16 md:h-12 lg:h-16 bg-foreground rounded-xl" />
          <div className="w-16 md:w-12 lg:w-16 h-16 md:h-12 lg:h-16 bg-foreground rounded-xl" />
          <div className="w-16 md:w-12 lg:w-16 h-16 md:h-12 lg:h-16 bg-foreground rounded-xl" />
        </div>
      </div>
    </section>
  );
}
