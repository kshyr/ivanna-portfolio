import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import {
  aboutPageSingletonName,
  homePageSingletonName,
} from "@/sanity/structure";
import { AboutPage, HomePage } from "@/sanity.types";
import HobbiesSection from "@/components/HobbiesSections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";

async function getAboutPageData(): Promise<
  AboutPage & {
    resumePdf: HomePage["resumePdf"];
    title: HomePage["title"];
    email: string;
  }
> {
  const query = `*[_type == "${aboutPageSingletonName}"][0]`;
  const data = await client.fetch(query);
  const homePageQuery = `*[_type == "${homePageSingletonName}"][0]{resumePdf, title, "email": socialLinks.email}`;
  const homePageData = await client.fetch(homePageQuery);
  return { ...data, ...homePageData };
}

export default async function About() {
  const data = await getAboutPageData();
  return (
    <main className="flex w-full max-w-[1440px] flex-col font-sans text-base">
      <Header resumePdf={data.resumePdf} email={data.email} />
      <AboutSection
        photo={data.photo}
        title={data.title}
        aboutMeParagraph={data.aboutMeParagraph}
        secondParagraphTitle={data.secondParagraphTitle}
        secondParagraph={data.secondParagraph}
      />
      <HobbiesSection hobbies={data.hobbies} />
      <Link href="/" className="w-fit ml-auto mt-8 my-16 mr-4 lg:mr-16">
        <Button className="p-6 rounded-4xl font-bold uppercase">
          Main Page {">"}
        </Button>
      </Link>
      <Footer />
    </main>
  );
}
