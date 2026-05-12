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
    title: "Information We Collect",
    text: `Al Saleem Charity may collect personal information provided voluntarily by users through donation forms, contact forms, volunteer applications, or any communication submitted through the platform. This information may include full name, phone number, email address, donation details, uploaded documents, and any additional information required for communication and verification purposes.`,
  },

  {
    title: "How Information Is Used",
    text: `The collected information is used strictly for humanitarian and operational purposes related to the organization. This includes donation verification, communication with donors, case follow-up, financial confirmation, volunteer coordination, improving platform services, and maintaining transparency between the organization and supporters.`,
  },

  {
    title: "Data Protection",
    text: `Al Saleem Charity takes reasonable technical and administrative measures to protect user information from unauthorized access, misuse, disclosure, alteration, or loss. Access to sensitive information is restricted to authorized personnel directly involved in operational processes.`,
  },

  {
    title: "Donation Verification",
    text: `Information submitted through donation forms may be reviewed and verified by the organization team before confirming or processing contributions. In certain cases, the organization may contact donors to confirm submitted details or request additional clarification when necessary.`,
  },

  {
    title: "Third-Party Services",
    text: `The platform may rely on external services such as payment providers, hosting services, analytics tools, cloud storage, or communication platforms. These services may process limited technical or operational data strictly as required to maintain platform functionality.`,
  },

  {
    title: "Cookies",
    text: `This website may use cookies and basic tracking technologies to improve user experience, analyze platform performance, remember user preferences, and optimize website functionality. Users may disable cookies through browser settings if preferred.`,
  },

  {
    title: "Media and Uploaded Content",
    text: `Any files, screenshots, payment receipts, or documents uploaded by users through the platform are treated as confidential and are used only for donation confirmation, verification, and operational follow-up.`,
  },

  {
    title: "External Links",
    text: `The platform may contain links to external websites or third-party services. Al Saleem Charity is not responsible for the privacy practices, content, or policies of external platforms outside the organization’s official domain.`,
  },

  {
    title: "Policy Updates",
    text: `This Privacy Policy may be updated periodically to reflect operational improvements, legal requirements, or platform changes. Continued use of the platform after updates indicates acceptance of the revised policy.`,
  },

  {
    title: "Contact",
    text: `For questions related to privacy, data handling, or submitted information, users may contact Al Saleem Charity directly through the official communication channels provided on the platform.`,
  },
];

export default async function PrivacyPolicyPage({ params }: Props) {
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
              Privacy Policy
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
              This Privacy Policy explains how Al Saleem Charity collects,
              stores, protects, and uses information submitted through the
              platform and related communication channels.
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