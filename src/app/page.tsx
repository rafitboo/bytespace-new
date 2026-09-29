import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import CourseCatalog from "@/components/sections/CourseCatalog";
import LearningPaths from "@/components/sections/LearningPaths";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LogoCloud />
      <CourseCatalog />
      <LearningPaths />
    </main>
  );
}