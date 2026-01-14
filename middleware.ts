/**
 * Next.js Middleware for i18n
 * Handles locale detection and redirection to localized paths
 */

import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isValidLocale, LOCALES } from './src/i18n/config';

const PUBLIC_FILES = /\.(.+)$|^(?:api)(?:\/|$)/;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip public files and API routes
  if (PUBLIC_FILES.test(pathname)) {
    return;
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // Extract locale from Accept-Language header or use default
  const preferredLocale = getPreferredLocale(request) || DEFAULT_LOCALE;

  // Redirect to localized path
  return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url));
}

/**
 * Extract the first matching locale from Accept-Language header
 */
function getPreferredLocale(request: NextRequest): string | null {
  const acceptLanguage = request.headers.get('accept-language');

  if (!acceptLanguage) {
    return null;
  }

  // Parse Accept-Language header (e.g., "es-ES,es;q=0.9,en;q=0.8")
  const languages = acceptLanguage.split(',').map((lang) => {
    const [language] = lang.trim().split(';');
    return language.split('-')[0].toLowerCase();
  });

  // Find the first matching supported locale
  for (const lang of languages) {
    if (isValidLocale(lang)) {
      return lang;
    }
  }

  return null;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

// The writing of this guide was improved with AI
// by Nicolas O. Luna & Claude Haiku 4.5 (AI model)
