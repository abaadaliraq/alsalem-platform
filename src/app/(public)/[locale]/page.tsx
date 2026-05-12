import Hero from "../../../components/hero/Hero";
import HeroCards from "../../../components/hero/HeroCards";
import HomeIntro from "../../../components/sections/HomeIntro";
import AboutSection from "../../../components/sections/AboutSection";
import type { Locale } from "../../../lib/locales/config";
import UrgentCasesSection from "../../../components/sections/UrgentCasesSection";
import HowDonationWorksSection from "../../../components/sections/HowDonationWorksSection";
import DonationCategoriesSlider from "../../../components/sections/DonationCategoriesSlider";
import DonationCTASection from "../../../components/sections/DonationCTASection";
import StatisticsSection from "../../../components/sections/StatisticsSection";
import Footer from "../../../components/layout/Footer";
type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <Hero locale={locale} />
      <HeroCards locale={locale} />
      <HomeIntro locale={locale} />
      <AboutSection locale={locale} />
      <UrgentCasesSection locale={locale} />
      <DonationCategoriesSlider locale={locale} />
      <HowDonationWorksSection locale={locale} />
      <StatisticsSection locale={locale} />
     <DonationCTASection locale={locale} />
     
    </main>
  );
}
