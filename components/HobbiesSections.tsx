import { AboutPage } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

interface HobbiesSectionProps {
  hobbies: AboutPage["hobbies"];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <section className="w-full flex flex-col mt-8 px-4 xl:px-16 gap-12">
      <h3 className="text-[24px] lg:text-lg font-medium">
        While I&apos;m not designing, you can find me...
      </h3>
      <div className="w-full flex flex-row gap-8 flex-wrap justify-center">
        {hobbies?.map((hobby) => {
          return (
            <div
              key={hobby.name}
              className="relative flex flex-col items-center w-[400px] h-[313px]"
            >
              <img
                src={
                  hobby.pic1
                    ? urlFor(hobby.pic1).url()
                    : "https://placehold.co/200x200"
                }
                alt={hobby.name}
                className="w-[200px] h-[200px] absolute object-cover -rotate-[30deg] left-10 top-8 rounded-2xl"
              />
              <img
                src={
                  hobby.pic2
                    ? urlFor(hobby.pic2).url()
                    : "https://placehold.co/200x200"
                }
                alt={hobby.name}
                className="w-[200px] h-[200px] absolute object-cover rounded-2xl"
              />
              <img
                src={
                  hobby.pic3
                    ? urlFor(hobby.pic3).url()
                    : "https://placehold.co/200x200"
                }
                alt={hobby.name}
                className="w-[200px] h-[200px] absolute object-cover rotate-[15deg] right-10 top-8 rounded-2xl"
              />
              <span className="text-base text-muted-foreground mt-auto">
                {hobby.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
