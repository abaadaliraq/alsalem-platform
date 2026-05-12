import type { Locale } from "../../../../lib/locales/config";
import AboutStoryPage from "../../../../components/pages/AboutStoryPage";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return <AboutStoryPage locale={locale} />;
}