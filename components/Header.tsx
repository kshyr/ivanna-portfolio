"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn, getResumeURL } from "@/lib/utils";
import { HomePage, internalGroqTypeReferenceTo } from "@/sanity.types";

type NavItem = {
  href: string;
  title: string;
  current?: boolean;
};

interface HeaderProps {
  resumePdf: HomePage["resumePdf"];
}

const navItems: NavItem[] = [
  {
    href: "/",
    title: "Home",
    current: true,
  },
  {
    href: "/",
    title: "Resume",
  },
];

export default function Header({ resumePdf }: HeaderProps) {
  const resumeURL = getResumeURL(resumePdf) as string;

  return (
    <header className="grid z-50 items-center grid-cols-12 sticky top-0 px-16 py-4 w-full">
      <Image
        src="/logo_cat_home.png"
        alt="logo"
        width={72}
        height={72}
        className="col-span-2 mt-6"
      />
      <div className="flex bg-[#9D96A21A] backdrop-blur-xl border-t border-t-[#C1C1C140] items-center justify-center gap-16 px-8 rounded-4xl col-span-2 col-start-10 sm:col-span-8 h-[54px] w-fit sm:w-full">
        <div className="flex gap-2 mr-auto">
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
        </div>
        {navItems?.map((navItem) => (
          <a
            key={navItem.title}
            href={navItem.title === "Resume" ? resumeURL : navItem.href}
            target={navItem.title === "Resume" ? "_blank" : "_self"}
            className={cn(
              "text-sm text-[#7E7E7E]",
              navItem.current && "text-[#BBBBBB] font-semibold",
              "hidden sm:block",
            )}
          >
            {navItem.title}
          </a>
        ))}
      </div>

      <Button className="hidden sm:block ml-auto col-span-2 h-[54px] rounded-4xl font-bold uppercase">
        Get In Touch!
      </Button>
    </header>
  );
}
