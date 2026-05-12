"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "../../lib/locales/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="relative">
      <select
        value={locale}
        name="language"
        aria-label="Language"
        onChange={(e) => switchLocale(e.target.value as Locale)}
        className="h-10 appearance-none rounded-full border border-white/20 bg-black/20 px-5 pe-9 text-xs font-bold text-white outline-none backdrop-blur-md"
      >
        {locales.map((item) => (
          <option key={item} value={item} className="text-black">
            {localeLabels[item]}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-white"
      />
    </div>
  );
}