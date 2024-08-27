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
      handle: "instagram",
      title: "Instagram",
      url: socialLinks?.instagram,
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
      handle: "gmail",
      title: "Email me!",
      url: `mailto:${socialLinks?.email}`,
    },
  ];

  return (
    <section className="w-full flex flex-col pb-8 pt-28">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold">
          Reach out to me!{" "}
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
          {links.map((link) => (
            <a
              key={link.handle}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
          ))}
        </div>
      </div>
      <a href={`${resumeURL}`} target="_blank">
        <Button className="ml-auto p-6 rounded-4xl font-bold uppercase">
          Resume {">"}
        </Button>
      </a>
    </section>
  );
}
