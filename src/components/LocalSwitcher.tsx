'use client';

import { useI18n } from '@/i18n/client';
import { LOCALES, LOCALE_NAMES } from '@/i18n/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? '/';
  const { locale: currentLocale } = useI18n();

  // Extract the current locale from pathname and remove it
  // pathname format: /[locale]/path or /[locale]
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '$1') || '/';

  const buildLocaleHref = (newLocale: string): string => {
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <nav className="flex gap-2 text-sm font-medium">
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={buildLocaleHref(locale)}
          className={`rounded px-2 py-1 transition-colors ${
            currentLocale === locale
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
          }`}
          title={`Switch to ${LOCALE_NAMES[locale as 'es' | 'en']}`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
