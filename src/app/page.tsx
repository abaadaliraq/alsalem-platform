import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSupportSection from "@/components/home/AboutSupportSection";
import UrgentCasesSection from "@/components/home/UrgentCasesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TransparencySection from "@/components/home/TransparencySection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutSupportSection />
      <UrgentCasesSection />
      <HowItWorksSection />
      <TransparencySection />
      <Footer />
    </main>
  );
}