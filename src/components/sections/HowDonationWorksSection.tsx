import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function HowDonationWorksSection({
  locale,
}: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";

  return (
    <section id="donation-process" className="w-full bg-[#F5F1E8]">
      <Link
        href={`/${locale}/donate`}
        className="group relative block h-[360px] w-full overflow-hidden md:h-[430px]"
      >
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2200&auto=format&fit=crop"
          alt={isAr ? "آلية التبرع" : "Donation Process"}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        {/* YELLOW OVERLAY */}
        <div className="absolute inset-0 bg-[#A36B00]/72" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#5C3B00]/25 via-[#A36B00]/45 to-[#2B1B00]/70" />

        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {isAr
                ? "آلية التبرع"
                : isKu
                ? "شێوازی بەخشین"
                : "How Donation Works"}
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-16 bg-white/80" />

            <p className="mx-auto mt-6 max-w-2xl text-sm font-normal leading-7 text-white/82 md:text-base md:leading-8">
              {isAr
                ? "تعرّف على خطوات التبرع داخل المنصة وكيف يتم التحقق من الحالات وضمان وصول الدعم بشكل واضح وآمن."
                : isKu
                ? "بزانە چۆن پرۆسەی بەخشین لە پلاتفۆرمەکەدا ئەنجام دەدرێت بە شێوەیەکی ڕوون و پارێزراو."
                : "Learn how donations are processed, verified, and delivered securely through the platform."}
            </p>

            <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-[#5C3B00]">
              <ArrowLeft className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}