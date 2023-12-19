import Image from "next/image";
import { Button } from "./ui/button";

const links = [
  {
    handle: "instagram",
    title: "Instagram",
    url: "https://instagram.com",
  },
  {
    handle: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    handle: "behance",
    title: "Behance",
    url: "https://behance.net",
  },
  {
    handle: "gmail",
    title: "Email me!",
    url: "mailto:email@email.com",
  },
];

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col pb-8 pt-28">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold">
          Reach me out!{" "}
          <Image
            src="/logo_cat_wide.svg"
            alt="logo-cat-wide"
            width={78}
            height={56}
            className="inline mb-3"
          />
        </h3>
        <p className="opacity-70 font-medium">
          This is where we start our journey together
        </p>
        <div className="flex gap-12 mt-12">
          {links.map((link) => {
            return (
              <a key={link.handle} href={link.url} target="_blank">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={"/" + link.handle + "-logo.png"}
                    alt={link.handle + " logo"}
                    width={76}
                    height={76}
                  />
                  <span className="font-semibold text-sm">{link.title}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Button className="ml-auto p-6 rounded-4xl font-bold uppercase">
        To the resume
      </Button>
    </section>
  );
}
