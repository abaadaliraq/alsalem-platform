import Link from "next/link";
import Image from "next/image";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const isAr = locale === "ar";

  return (
    <footer className="bg-[#061A2B] px-0 py-0 text-white">
  <div className="w-full overflow-hidden bg-gradient-to-br from-[#061A2B] via-[#071726] to-[#1D0B3F]">
        {/* TOP WAVE */}
        <div className="relative h-[70px] overflow-hidden bg-[#232D2C]">
          <div className="absolute -top-[70px] left-[-5%] h-[140px] w-[45%] rounded-[100%] bg-[#061A2B]" />

<div className="absolute -top-[85px] left-[28%] h-[170px] w-[45%] rounded-[100%] bg-[#061A2B]" />

<div className="absolute -top-[70px] right-[-5%] h-[140px] w-[45%] rounded-[100%] bg-[#061A2B]" />
        </div>

        {/* CONTENT */}
        <div className="px-7 pb-10 pt-4 md:px-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B5CF6]">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Al Saleem
                  </h3>

                  <p className="text-[11px] text-white/35">
                    Charity Organization
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-[220px] text-[13px] leading-7 text-white/45">
                {isAr
                  ? "منصة إنسانية حديثة تربط التبرعات بالحالات المحتاجة بشكل واضح وموثوق."
                  : "A modern charity platform connecting donations with real humanitarian cases."}
              </p>

              {/* SOCIALS */}
              <div className="mt-8 flex items-center gap-3 text-[#C7A03C]">
                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M13 22V12h3.5l.5-4H13V5.5c0-1.2.3-2 2-2H17V0h-3c-3.3 0-5 2-5 5.5V8H6v4h3v10h4z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.8-3.3a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.9 4.5 12 4.5 12 4.5h0s-3.9 0-6.9.3c-.4.1-1.3.1-2.1 1C2.4 6.5 2.2 8 2.2 8S2 9.8 2 11.5V13c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 6.6.3 6.6.3s3.9 0 6.9-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.8.2-3.5v-1.5C22 9.8 21.8 8 21.8 8zM10 15.3V9.7l5.2 2.8L10 15.3z" />
                  </svg>
                </Link>

                {/* X */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  className="transition hover:scale-110 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* COLUMN */}
            <FooterColumn
              title="Navigation"
              links={[
                {
                  label: isAr ? "الرئيسية" : "Home",
                  href: `/${locale}`,
                },
                {
                  label: isAr ? "من نحن" : "About",
                  href: `/${locale}/about`,
                },
                {
                  label: isAr ? "الحالات" : "Cases",
                  href: `/${locale}/cases`,
                },
                {
                  label: isAr ? "تبرع الآن" : "Donate",
                  href: `/${locale}/donate`,
                },
              ]}
            />

            <FooterColumn
              title="Support"
              links={[
                {
                  label: isAr ? "الأقسام" : "Categories",
                  href: `/${locale}/categories`,
                },
                {
                  label: isAr ? "المتطوعون" : "Volunteers",
                  href: `/${locale}/volunteers`,
                },
                {
                  label: isAr ? "الشفافية" : "Transparency",
                  href: `/${locale}/transparency`,
                },
              ]}
            />

            <FooterColumn
              title="Legal"
              links={[
                {
                  label: "Privacy Policy",
                  href: `/${locale}/privacy-policy`,
                },
                {
                  label: "Terms",
                  href: `/${locale}/terms`,
                },
                {
                  label: "Cookies",
                  href: `/${locale}/cookies`,
                },
              ]}
            />

            <FooterColumn
              title="Contact"
              links={[
                {
                  label: "info@alsaleem.org",
                  href: "#",
                },
                {
                  label: "+964 770 000 0000",
                  href: "#",
                },
                {
                  label: "Baghdad, Iraq",
                  href: "#",
                },
              ]}
            />
          </div>

          {/* BOTTOM */}
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-[11px] text-white/30">
            © 2026 Al Saleem Charity Organization
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;

  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[13px] font-semibold text-[#78D36B]">
        {title}
      </h4>

      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block text-[13px] font-medium text-white/45 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}