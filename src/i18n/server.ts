/**
 * Server-side utilities for loading i18n messages
 * This module handles loading and caching translation files
 */

import { Locale } from './config';

// Simple in-memory cache for messages
const messagesCache = new Map<Locale, Record<string, any>>();

/**
 * Load messages for a specific locale
 * Caches the results to avoid repeated file reads
 */
export async function getMessages(locale: Locale): Promise<Record<string, any>> {
  // Check cache first
  if (messagesCache.has(locale)) {
    return messagesCache.get(locale)!;
  }

  try {
    // Dynamic import to load JSON files
    const messages = await import(`../../messages/${locale}.json`);
    const data = messages.default;

    // Cache the result
    messagesCache.set(locale, data);

    return data;
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    return {};
  }
}

/**
 * Nested key accessor helper
 * Example: getNestedValue(messages, 'header.title') -> messages.header.title
 */
export function getNestedValue(
  obj: Record<string, any>,
  keyPath: string,
  defaultValue?: string
): string {
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

/**
 * Get a translated string from messages
 * Example: t(messages, 'header.title')
 */
export function t(messages: Record<string, any>, keyPath: string, defaultValue?: string): string {
  return getNestedValue(messages, keyPath, defaultValue);
}
