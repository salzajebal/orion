import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContentSections } from "@/components/content-section";
import { Platforms } from "@/components/platforms";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Features />
      <ContentSections />
      <Platforms />
      <Footer />
    </div>
  );
}
