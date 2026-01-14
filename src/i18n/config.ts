/**
 * i18n Configuration
 * Defines supported locales, default locale, and type-safe locale handling
 */

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/**
 * Type guard to validate if a string is a valid locale
 */
export function isValidLocale(locale: unknown): locale is Locale {
  return typeof locale === 'string' && LOCALES.includes(locale as Locale);
}

/**
 * Get the best matching locale from a string
 * Falls back to DEFAULT_LOCALE if invalid
 */
export function getLocaleFromString(locale: unknown): Locale {
  if (isValidLocale(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}
