import type { Metadata } from "next";
import { Bricolage_Grotesque as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ivanna Pavlyk | UX Designer",
  description: "UX/UI designer and researcher based in Winnipeg, Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "font-white flex justify-center font-sans",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
