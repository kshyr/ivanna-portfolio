"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn, getResumeURL } from "@/lib/utils";
import { HomePage } from "@/sanity.types";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavItem = {
  href?: string;
  title: string;
  current?: boolean;
};

interface HeaderProps {
  resumePdf: HomePage["resumePdf"];
  email: string;
}

const navItems: NavItem[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    title: "Resume",
  },
];

export default function Header({ resumePdf, email }: HeaderProps) {
  const resumeURL = getResumeURL(resumePdf) as string;
  const pathname = usePathname();

  return (
    <header className="grid z-50 min-h-[160px] items-center grid-cols-12 sticky top-0 px-4 lg:px-16 py-4 w-full">
      <Link href="/" className="col-span-2 mt-6">
        <Image src="/logo_cat_home.png" alt="logo" width={72} height={72} />
      </Link>
      <div className="flex bg-[#9D96A21A] backdrop-blur-xl border-t border-t-[#C1C1C140] items-center justify-center gap-8 xl:gap-16 px-8 rounded-4xl col-span-10 justify-self-end sm:justify-self-auto sm:col-span-7 md:col-span-7 lg:col-span-8 h-[54px] w-fit sm:w-full">
        <div className="hidden sm:flex gap-2 mr-auto">
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
        </div>
        {navItems?.map((navItem) => {
          const current = navItem.href === pathname;
          return (
            <Link
              key={navItem.title}
              href={
                navItem.title === "Resume"
                  ? resumeURL
                  : (navItem.href as string)
              }
              target={navItem.title === "Resume" ? "_blank" : "_self"}
              className={cn(
                "text-sm text-[#7E7E7E]",
                current && "text-[#BBBBBB] font-semibold",
              )}
            >
              {navItem.title}
            </Link>
          );
        })}
      </div>

      <a
        href={`mailto:${email}`}
        className="hidden sm:block ml-4 md:ml-8 lg:ml-auto col-span-2"
        target="_blank"
      >
        <Button className="h-[54px] rounded-4xl font-bold uppercase hover:bg-[radial-gradient(circle_at_center_40px,#9D9DEE_0%,#E3E3FF_100%)] transition-all">
          Get In Touch!
        </Button>
      </a>
    </header>
  );
}
