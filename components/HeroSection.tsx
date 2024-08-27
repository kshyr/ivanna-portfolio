import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
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
    <section className="flex w-full justify-between px-16 pt-24">
      <div className="flex gap-2 flex-col">
        <div>
          <h1 className="text-xl font-semibold leading-[48px]">
            Ivanna Pavlyk
          </h1>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <h3 className="font-medium mt-1">
          Designer and researcher based in Winnipeg, Canada
        </h3>
        <p className="max-w-xl opacity-70 text-sm">{heroParagraph}</p>
      </div>
      <div className="bg-foreground w-[530px] rounded-4xl flex items-center justify-center">
        {heroImages && heroImages[0] && (
          <Image
            src={urlFor(heroImages[0]).url()}
            alt="Hero image"
            width={530}
            height={530}
            className="rounded-4xl"
          />
        )}
      </div>
    </section>
  );
}
