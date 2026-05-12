import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

const sections = [
  {
    title: "Use of the Platform",
    text: "Al Saleem Charity provides humanitarian support services and donation facilitation for verified charitable cases. By using this platform, users agree to interact respectfully and provide accurate information during any donation or communication process.",
  },

  {
    title: "Donations",
    text: "All donations submitted through the platform are reviewed and processed by the organization team. The platform reserves the right to verify donations, reject suspicious submissions, or request additional confirmation when necessary.",
  },

  {
    title: "Information Accuracy",
    text: "Users are responsible for ensuring that all submitted personal information, donation details, and communication data are accurate and up to date.",
  },

  {
    title: "Privacy",
    text: "Personal information submitted through forms or contact sections is used strictly for communication, donation follow-up, verification, and operational purposes related to the organization.",
  },

  {
    title: "Platform Content",
    text: "All content, visuals, branding, and media displayed on this website belong to Al Saleem Charity unless otherwise stated. Unauthorized copying or redistribution is prohibited.",
  },

  {
    title: "Changes to Terms",
    text: "The organization may update or modify these terms at any time without prior notice in order to improve platform operations, security, or legal compliance.",
  },
];

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#111111]">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-7 md:px-10">
          <div>
            <p className="text-[10px] font-light tracking-[0.28em] text-black/35">
              AL SALEEM CHARITY
            </p>

            <h1 className="mt-3 text-[26px] font-light tracking-[-0.03em] text-black md:text-[42px]">
              Terms & Conditions
            </h1>
          </div>

          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-[11px] font-light text-black/45 transition hover:text-black"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-[12px] font-light leading-7 text-black/52 md:text-[13px]">
              These Terms & Conditions govern the use of the Al Saleem Charity
              platform and all related donation, communication, and support
              services provided through the website.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border-b border-black/6 pb-10"
              >
                <h2 className="text-[15px] font-normal tracking-[-0.01em] text-black md:text-[18px]">
                  {section.title}
                </h2>

                <p className="mt-4 max-w-3xl text-[12px] font-light leading-8 text-black/55 md:text-[13px]">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-black/6 pt-6">
            <p className="text-[10px] font-light tracking-[0.08em] text-black/30">
              © 2026 AL SALEEM CHARITY ORGANIZATION
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}