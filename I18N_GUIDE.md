/\*\*

- I18N Implementation Guide
-
- This document describes the custom i18n implementation for the application.
- The implementation follows Next.js 16 App Router best practices and is fully scalable.
  \*/

/\*\*

- STRUCTURE OVERVIEW
-
- src/i18n/
- ├── config.ts - Central configuration (locales, default locale, type guards)
- ├── server.ts - Server-side utilities (getMessages, t helper)
- ├── client.tsx - Client context and hooks (I18nProvider, useI18n, useLocale)
-
- middleware.ts - Locale detection and routing middleware
-
- src/app/[locale]/ - Dynamic locale route segment
- └── layout.tsx - Wraps with I18nProvider
- └── page.tsx - Uses server translations
-
- messages/ - Translation files
- ├── en.json - English translations
- └── es.json - Spanish translations
-
- src/components/
- └── LocaleSwitcher.tsx - Client component for switching locales
  \*/

/\*\*

- ADDING A NEW LANGUAGE
-
- 1.  Add locale to LOCALES array in src/i18n/config.ts:
- export const LOCALES = ['es', 'en', 'fr'] as const;
-
- 2.  Add locale name in LOCALE_NAMES:
- export const LOCALE_NAMES: Record<Locale, string> = {
-      es: 'Español',
-      en: 'English',
-      fr: 'Français',  // <-- Add here
- };
-
- 3.  Create translation file messages/fr.json with same structure as existing files
-
- 4.  No other changes needed! The system is fully scalable.
      \*/

/\*\*

- SERVER-SIDE USAGE
-
- In Server Components (async):
-
- import { getMessages } from '@/i18n/server';
- import { getLocaleFromString, Locale } from '@/i18n/config';
- import { t } from '@/i18n/server';
-
- export default async function Component({ params }: Props) {
- const { locale: rawLocale } = await params;
- const locale = getLocaleFromString(rawLocale) as Locale;
- const messages = await getMessages(locale);
-
- const title = t(messages, 'header.title');
- // or directly:
- const title = messages.header?.title || 'Default Title';
- }
  \*/

/\*\*

- CLIENT-SIDE USAGE
-
- In Client Components ('use client'):
-
- import { useI18n } from '@/i18n/client';
-
- export default function Component() {
- const { locale, t, messages } = useI18n();
-
- return <h1>{t('header.title')}</h1>;
- }
-
- Or get just the locale:
-
- import { useLocale } from '@/i18n/client';
-
- const locale = useLocale(); // Returns 'es' | 'en'
  \*/

/\*\*

- TRANSLATION FILE STRUCTURE
-
- Translation files (messages/[locale].json) should be organized hierarchically:
-
- {
- "metadata": { ... }, // Metadata for the locale
- "common": { ... }, // Common terms used throughout the app
- "header": { ... }, // Header section translations
- "hero": { ... }, // Hero section translations
- "footer": { ... } // Footer section translations
- }
-
- This structure makes it easy to scale and maintain translations.
- Access via dot notation: t('header.title')
  \*/

/\*\*

- KEY FEATURES
-
- ✅ Type-safe locale handling with TypeScript
- ✅ Server-side rendering (no JavaScript needed for translations)
- ✅ Client-side context for dynamic translations
- ✅ Automatic locale detection via Accept-Language header
- ✅ SEO-friendly with proper URL structure (/es/..., /en/...)
- ✅ Full caching of message files
- ✅ Scalable: Easy to add new locales or namespaces
- ✅ No external i18n library dependency
- ✅ Built on Next.js App Router
  \*/

/\*\*

- MIDDLEWARE
-
- The middleware.ts file:
- - Detects the user's preferred language from Accept-Language header
- - Redirects requests without a locale prefix to the appropriate localized URL
- - Skips public files and API routes
- - Falls back to DEFAULT_LOCALE if browser language is not supported
    \*/

export {};
