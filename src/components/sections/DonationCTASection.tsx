import Link from "next/link";

type Props = {
  locale: "ar" | "en" | "ku";
};

const content = {
  ar: {
    label: "AL SALEEM CHARITY",
    title: "كل جزءٍ من الدعم يصنع أثراً حقيقياً",
    desc: "مساهمتك قد تساعد عائلة على تجاوز ظرف صعب واستعادة الاستقرار من جديد.",
    button: "مشاهدة الحالات",
  },

  en: {
    label: "AL SALEEM CHARITY",
    title: "Every contribution creates a real impact",
    desc: "Your support can help a family overcome hardship and regain stability.",
    button: "View Cases",
  },

  ku: {
    label: "AL SALEEM CHARITY",
    title: "هەر بەشێک لە یارمەتی کاریگەری دروست دەکات",
    desc: "بەشدارییەکەت دەتوانێت خێزانێک لە دۆخێکی سەخت ڕزگار بکات.",
    button: "بینینی حاڵەتەکان",
  },
};

export default function DonationCTASection({ locale }: Props) {
  const t = content[locale] ?? content.ar;

  return (
    <section className="relative overflow-hidden">
      <img
        src="/education.jpg"
        alt="Donation CTA"
        className="h-[210px] w-full object-cover md:h-[300px]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-5 text-center text-white">
          <p className="mb-2 text-[8px] font-normal tracking-[0.28em] text-white/70 md:text-[9px]">
            {t.label}
          </p>

          <h2 className="mx-auto max-w-2xl text-[18px] font-light leading-[1.5] tracking-[-0.02em] md:text-[34px]">
            {t.title}
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[10px] font-normal leading-6 text-white/75 md:text-[13px]">
            {t.desc}
          </p>

          <div className="mt-5">
            <Link
              href={`/${locale}/cases`}
              className="inline-flex items-center justify-center rounded-full bg-[#f8c542] px-4 py-1.5 text-[10px] font-normal text-[#211803] transition duration-300 hover:scale-[1.03] md:px-5 md:py-2 md:text-[11px]"
            >
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}