import { I18nProvider } from '@/i18n/client';
import { getLocaleFromString, Locale, LOCALES } from '@/i18n/config';
import { getMessages } from '@/i18n/server';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromString(rawLocale) as Locale;

  const messages = await getMessages(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
