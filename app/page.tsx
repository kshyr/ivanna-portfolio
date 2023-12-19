import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full max-w-[1440px] flex-col font-sans text-base">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <div className="px-32">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
