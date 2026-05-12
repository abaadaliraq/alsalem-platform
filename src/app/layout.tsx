import type { Metadata } from "next";
import { Montserrat, Alexandria } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-en",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-ar",
});

export const metadata: Metadata = {
  title: "Al Saleem Charity",
  description: "Al Saleem Charity Organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={`${montserrat.variable} ${alexandria.variable}`}>
        {children}
      </body>
    </html>
  );
}