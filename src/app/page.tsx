import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import DonationCategoriesSection from "@/components/home/DonationCategoriesSection";
import AboutSupportSection from "@/components/home/AboutSupportSection";
import UrgentCasesSection from "@/components/home/UrgentCasesSection";
import GoalsSection from "@/components/home/GoalsSection";
import TransparencySection from "@/components/home/TransparencySection";
import Footer from "@/components/layout/Footer";
import IraqPovertyMapSection from "@/components/home/IraqPovertyMapSection";


export default function HomePage() {
  return (
    <main className="bg-black">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <DonationCategoriesSection />

      {/* URGENT CASES */}
      <UrgentCasesSection />

      {/* ABOUT */}
      <AboutSupportSection />

      {/* HOW IT WORKS */}
<GoalsSection />
      {/* TRANSPARENCY */}
      <TransparencySection />

      {/* IRAQ MAP */}
      <IraqPovertyMapSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}