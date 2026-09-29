import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import CourseCatalog from "@/components/sections/CourseCatalog";
import LearningPaths from "@/components/sections/LearningPaths";
import ShowcaseSections from "@/components/sections/ShowcaseSections";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LogoCloud />
      <CourseCatalog />
      <LearningPaths />
      <ShowcaseSections />
      <CreatorCTA />
      <Testimonials/>
    </main>
  );
}