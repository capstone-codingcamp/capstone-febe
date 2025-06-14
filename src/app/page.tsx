import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoriesSection } from "@/components/categories-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { TempatWisataList } from "@/components/tempat-wisata-list";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-jakarta">
      <Header />
      <Hero />
      <CategoriesSection />
      <TempatWisataList />
      <AboutSection />
      <Footer />
    </main>
  );
}
