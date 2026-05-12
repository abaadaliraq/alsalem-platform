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
    title: "What Are Cookies",
    text: `Cookies are small text files stored on a user’s device when visiting a website. They help improve browsing experience, remember preferences, analyze website traffic, and support the functionality of different platform features.`,
  },

  {
    title: "How Cookies Are Used",
    text: `Al Saleem Charity uses cookies and similar technologies to improve website performance, maintain session stability, remember language or user preferences, analyze visitor interactions, and optimize the overall platform experience.`,
  },

  {
    title: "Performance and Analytics",
    text: `Cookies may collect anonymous technical information such as browser type, device information, pages visited, session duration, navigation behavior, and general usage statistics. This information helps improve website functionality and user experience.`,
  },

  {
    title: "Essential Cookies",
    text: `Certain cookies are necessary for the proper operation of the platform. These cookies support basic functions such as navigation, security, language selection, and form submission processes.`,
  },

  {
    title: "Third-Party Services",
    text: `Some third-party services integrated into the platform, such as analytics tools, embedded media, cloud hosting services, or communication systems, may also use cookies or related tracking technologies as part of their functionality.`,
  },

  {
    title: "Managing Cookies",
    text: `Users may manage, disable, or delete cookies through their browser settings at any time. Disabling certain cookies may affect parts of the website experience or limit the functionality of some services.`,
  },

  {
    title: "Data and Privacy",
    text: `Cookies used by Al Saleem Charity are intended to improve technical performance and user experience. The organization does not use cookies to sell personal data or track users for unrelated advertising purposes.`,
  },

  {
    title: "Policy Updates",
    text: `This Cookies Policy may be updated periodically to reflect technical, legal, or operational changes related to the platform and its services.`,
  },

  {
    title: "Contact",
    text: `For questions regarding cookies, browser data, or website tracking technologies, users may contact Al Saleem Charity through the official communication channels provided on the platform.`,
  },
];

export default async function CookiesPage({ params }: Props) {
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
              Cookies Policy
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
              This Cookies Policy explains how Al Saleem Charity uses cookies
              and related technologies across the platform to improve
              functionality, stability, security, and user experience.
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