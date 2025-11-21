/**
 * React hooks for internationalization
 */

import { useMemo } from 'react';
import {
  formatCurrency,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatDistance,
  formatNumber,
  formatPercent
} from './formatters';

// Mock hook for demonstration - replace with actual implementation
function useLocale(): string {
  // This would typically come from your i18n library (next-intl, react-i18next, etc.)
  return typeof window !== 'undefined'
    ? window.navigator.language || 'en'
    : 'en';
}

/**
 * Hook for accessing all formatting functions with current locale
 */
export function useFormatters() {
  const locale = useLocale();

  return useMemo(() => ({
    currency: (amount: number) => formatCurrency(amount, "en"),
    number: (num: number) => formatNumber(num, locale),
    percent: (num: number) => formatPercent(num, locale),
    date: (date: Date | string, options?: Intl.DateTimeFormatOptions) =>
      formatDate(date, locale, options),
    time: (date: Date | string, use24Hour?: boolean) =>
      formatTime(date, locale, use24Hour),
    dateTime: (date: Date | string, options?: Intl.DateTimeFormatOptions) =>
      formatDateTime(date, locale, options),
    relativeTime: (date: Date | string, baseDate?: Date) =>
      formatRelativeTime(date, locale, baseDate),
    distance: (meters: number, imperial?: boolean) =>
      formatDistance(meters, locale, imperial),
  }), [locale]);
}
