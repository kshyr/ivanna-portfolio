import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex w-full max-w-[1440px] flex-col border font-sans text-base">
      <Header />
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
