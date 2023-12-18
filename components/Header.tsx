import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  title: string;
  current?: boolean;
};

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
  {
    href: "/",
    title: "About Me",
  },
];

export default function Header() {
  return (
    <header className="grid z-50 items-center grid-cols-12 sticky top-0 px-16 py-4 w-full">
      <Image
        src="/logo_cat_home.png"
        alt="logo"
        width={72}
        height={72}
        className="col-span-2 mt-6"
      />
      <div className="flex bg-[#9D96A21A] backdrop-blur-xl border-t border-t-[#C1C1C140] items-center gap-16 px-8 rounded-3xl col-span-8 h-[54px]">
        <div className="flex gap-2 mr-auto">
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
          <div className="w-2 h-2 bg-[#BBBBBB] rounded-full" />
        </div>
        {navItems?.map((navItem) => {
          return (
            <a
              key={navItem.title}
              href={navItem.href}
              className={cn(
                "text-sm text-[#7E7E7E]",
                navItem.current && "text-[#BBBBBB] font-semibold",
              )}
            >
              {navItem.title}
            </a>
          );
        })}
      </div>

      <Button className="ml-auto col-span-2 h-[54px] rounded-3xl font-bold uppercase">
        Get In Touch!
      </Button>
    </header>
  );
}
