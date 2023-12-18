import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex w-full max-w-[1440px] py-32 flex-col border font-sans text-base">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
