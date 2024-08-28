import Image from "next/image";
import { Button } from "./ui/button";
import { HomePage } from "@/sanity.types";
import { buildFileUrl, parseAssetId } from "@sanity/asset-utils";
import sanityConfig from "@/sanity.config";
import { getResumeURL } from "@/lib/utils";

interface ContactSectionProps {
  socialLinks: HomePage["socialLinks"];
  resumePdf: HomePage["resumePdf"];
}

export default function ContactSection({
  socialLinks,
  resumePdf,
}: ContactSectionProps) {
  const resumeURL = getResumeURL(resumePdf);

  const links = [
    {
      handle: "gmail",
      title: "Email me!",
      url: `mailto:${socialLinks?.email}`,
    },
    {
      handle: "linkedin",
      title: "LinkedIn",
      url: socialLinks?.linkedn,
    },
    {
      handle: "behance",
      title: "Behance",
      url: socialLinks?.behance,
    },
    {
      handle: "instagram",
      title: "Instagram",
      url: socialLinks?.instagram,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-8 pb-8 pt-16 px-4 lg:px-16">
      <div className="flex flex-col items-center">
        <h3 className="text-lg lg:text-xl font-semibold">
          Reach out to me!{" "}
          <img
            src="/logo_cat_wide.svg"
            alt="logo-cat-wide"
            className="inline mb-3 max-w-[50px] lg:max-w-[100px]"
          />
        </h3>
        <p className="opacity-70 font-medium text-sm lg:text-base">
          This is where we start our journey together
        </p>
        <div className="flex gap-12 mt-12">
          {links.map((link) => (
            <a
              key={link.handle}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={"/" + link.handle + "-logo.png"}
                  alt={link.handle + " logo"}
                  className="max-w-[60px] max-h-[60px]"
                />
                <span className="font-semibold text-xs lg:text-sm">
                  {link.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <a href={`${resumeURL}`} target="_blank" className="w-fit ml-auto">
        <Button className="p-6 rounded-4xl font-bold uppercase">
          Resume {">"}
        </Button>
      </a>
    </section>
  );
}
