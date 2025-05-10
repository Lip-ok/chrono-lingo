import { formatDistance } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { en } from './locales/en';
import { ru } from './locales/ru';

type Locale = typeof en;

const locales: { [key: string]: Locale } = {
  en,
  ru,
};

interface HumanTimeDiffOptions {
  locale?: 'en' | 'ru';
  timeZone?: string;
  addSuffix?: boolean;
}

export function humanTimeDiff(
  from: Date | string,
  to: Date | string = new Date(),
  options: HumanTimeDiffOptions = {}
): string {
  const { locale = 'en', timeZone, addSuffix = true } = options;

  const fromDate = typeof from === 'string' ? new Date(from) : from;
  const toDate = typeof to === 'string' ? new Date(to) : to;

  const fromZoned = timeZone ? utcToZonedTime(fromDate, timeZone) : fromDate;
  const toZoned = timeZone ? utcToZonedTime(toDate, timeZone) : toDate;

  const localeData = locales[locale] || locales['en'];

  return formatDistance(fromZoned, toZoned, { addSuffix, locale: localeData });
}
