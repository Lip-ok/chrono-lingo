import { humanTimeDiff } from './src';

test('should return correct difference in English', () => {
  const from = new Date('2025-05-10T10:00:00Z');
  const to = new Date('2025-05-10T12:00:00Z');
  const result = humanTimeDiff(from, to, { locale: 'en' });
  expect(result).toBe('about 2 hours ago');
});

test('should return correct difference in Russian', () => {
  const from = new Date('2025-05-10T10:00:00Z');
  const to = new Date('2025-05-10T12:00:00Z');
  const result = humanTimeDiff(from, to, { locale: 'ru' });
  expect(result).toBe('около 2 часов назад');
});
