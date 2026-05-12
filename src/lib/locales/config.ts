export const locales = ["ar", "en", "ku"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeLabels: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  ku: "کوردی",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}