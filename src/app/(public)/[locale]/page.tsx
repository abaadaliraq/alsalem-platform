import Hero from "../../../components/hero/Hero";
import AboutSection from "../../../components/sections/AboutSection";
import type { Locale } from "../../../lib/locales/config";
import UrgentCasesSection from "../../../components/sections/UrgentCasesSection";
import HowDonationWorksSection from "../../../components/sections/HowDonationWorksSection";
import DonationCategoriesSlider from "../../../components/sections/DonationCategoriesSlider";
import Footer from "../../../components/layout/Footer";
type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <Hero locale={locale} />
      <AboutSection locale={locale} />
      <UrgentCasesSection locale={locale} />
      <DonationCategoriesSlider locale={locale} />
      <HowDonationWorksSection locale={locale} />
     
    </main>
  );
}
