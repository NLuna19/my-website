/**
 * Navigation utilities for the application
 * Re-exports Next.js navigation hooks for use throughout the app
 */

export { default as Link } from 'next/link';
export { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Re-export i18n utilities for convenience
export { I18nProvider, useI18n, useLocale } from '@/i18n/client';
export { DEFAULT_LOCALE, getLocaleFromString, LOCALE_NAMES, LOCALES } from '@/i18n/config';
export { getMessages } from '@/i18n/server';
