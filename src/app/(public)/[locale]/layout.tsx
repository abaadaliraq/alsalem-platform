import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { getDirection } from "../../../lib/locales/getDirection";
import { isValidLocale, type Locale } from "../../../lib/locales/config";

import Navbar from "../../../components/layout/Navbar";
import CookiesBanner from "../../../components/layout/CookieBanner";
import Footer from "../../../components/layout/Footer";
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dir = getDirection(locale as Locale);

  return (
    <div
      dir={dir}
      lang={locale}
      className="min-h-screen bg-[#07140F] text-white"
    >
      <Navbar locale={locale as Locale} />

      {children}

      <CookiesBanner locale={locale} />
      <Footer locale={locale as Locale} />
    </div>
  );
}