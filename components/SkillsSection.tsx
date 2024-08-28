import { cn } from "@/lib/utils";
import Carousel from "./Carousel";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
import { HomePage } from "@/sanity.types";

interface SkillsSectionProps {
  skillsParagraphStart: HomePage["skillsParagraphStart"];
  skillsParagraphEnd: HomePage["skillsParagraphEnd"];
  skillsImages: HomePage["skillsImages"];
}

export default function SkillsSection({
  skillsParagraphStart,
  skillsParagraphEnd,
  skillsImages,
}: SkillsSectionProps) {
  const images = skillsImages?.map((image) => urlFor(image).url());
  const fallbackImages = ["/frame1.png", "/frame2.png", "/frame3.png"];

  return (
    <section className="w-full flex flex-col px-16">
      <div className="py-16">
        <h1 className="text-xl font-semibold">Skills</h1>
        <p className="text-sm max-w-[550px]">
          <span className="opacity-70">{skillsParagraphStart}</span>{" "}
          {skillsParagraphEnd}
        </p>
      </div>
      <Carousel images={images ?? fallbackImages} />
    </section>
  );
}
