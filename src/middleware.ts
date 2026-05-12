import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/lib/locales/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const locale = pathname.split("/")[1];

  if (!isValidLocale(locale)) {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};