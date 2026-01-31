import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}
