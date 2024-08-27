import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import { client } from "@/sanity/lib/client";
import { homePageSingletonName } from "@/sanity/structure";
import { HomePage } from "@/sanity.types";

async function getHomePageData(): Promise<HomePage> {
  const query = `*[_type == "${homePageSingletonName}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getHomePageData();
  console.log(data);

  return (
    <main className="flex w-full max-w-[1440px] flex-col font-sans text-base">
      <Header resumePdf={data.resumePdf} />
      <HeroSection
        title={data.title}
        heroParagraph={data.heroParagraph}
        heroImages={data.heroImages}
      />
      <ProjectsSection
        projectsParagraphStart={data.projectsParagraphStart}
        projectsParagraphEnd={data.projectsParagraphEnd}
        projects={data.projects}
      />
      <SkillsSection
        skillsParagraphStart={data.skillsParagraphStart}
        skillsParagraphEnd={data.skillsParagraphEnd}
        skillsImages={data.skillsImages}
      />
      <div className="px-32">
        <ContactSection
          socialLinks={data.socialLinks}
          resumePdf={data.resumePdf}
        />
        <Footer />
      </div>
    </main>
  );
}
