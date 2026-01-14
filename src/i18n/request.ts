import type { RequestConfig } from 'next-intl/server';
import { getRequestConfig } from 'next-intl/server';

import en from '../../messages/en.json';
import es from '../../messages/es.json';

const DEFAULT_LOCALE = 'es' as const;

const messagesMap: Record<string, any> = {
  es,
  en,
};

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const resolvedLocale = locale && locale in messagesMap ? locale : DEFAULT_LOCALE;

  return {
    locale: resolvedLocale,
    messages: messagesMap[resolvedLocale],
  };
});
