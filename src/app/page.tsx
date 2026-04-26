import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Psychology from "@/components/Psychology";
import Features from "@/components/Features";
import Carousel from "@/components/Carousel";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030406] flex flex-col font-sans overflow-x-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col">
        <Header />
        <Hero />
      </div>
      <Psychology />
      <Features />
      <Carousel />
      <FooterCTA />
      <Footer />
    </main>
  );
}
