import type { Locale } from "./config";

export function getDirection(locale: Locale) {
  return locale === "en" ? "ltr" : "rtl";
}