import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import { client } from "@/sanity/lib/client";
import type { HomePage } from "@/sanity.types";

async function getHomePageData(): Promise<HomePage> {
  const query = `
  *[_id == "homePage"]
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getHomePageData();
  return (
    <main className="flex w-full max-w-[1440px] flex-col font-sans text-base">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <div className="px-32">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
