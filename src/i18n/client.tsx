/**
 * Client-side i18n context and hook
 * Provides access to translations and current locale in client components
 */

'use client';

import { createContext, ReactNode, useContext } from 'react';
import type { Locale } from './config';

interface I18nContextType {
  locale: Locale;
  messages: Record<string, any>;
  t: (keyPath: string, defaultValue?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export interface I18nProviderProps {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, any>;
}

/**
 * Provider component for i18n context
 * Wrap your layout with this provider to make translations available to child components
 */
export function I18nProvider({ children, locale, messages }: I18nProviderProps) {
  const t = (keyPath: string, defaultValue?: string): string => {
    return getNestedValue(messages, keyPath, defaultValue);
  };

  const value: I18nContextType = {
    locale,
    messages,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * Hook to use translations in client components
 * Must be used within an I18nProvider
 */
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error(
      'useI18n must be used within an I18nProvider. Make sure your component is wrapped by I18nProvider in the layout.'
    );
  }

  return context;
}

/**
 * Hook to get the current locale
 */
export function useLocale(): Locale {
  return useI18n().locale;
}

/**
 * Nested key accessor helper (same as server version)
 */
function getNestedValue(obj: Record<string, any>, keyPath: string, defaultValue?: string): string {
  const keys = keyPath.split('.');
  let current: any = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return defaultValue || keyPath;
    }
  }

  return typeof current === 'string' ? current : keyPath;
}
