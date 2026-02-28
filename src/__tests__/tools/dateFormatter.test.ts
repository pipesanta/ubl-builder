import { decomposeTime } from '../../tools/dateFormatter';

describe('dateFormatter.decomposeTime', () => {
  test('decomposes a timestamp in UTC timezone', () => {
    const ts = Date.UTC(2020, 0, 2, 3, 4, 5, 678);
    const result = decomposeTime(ts, { timezone: 'UTC' });

    expect(result.year).toBe(2020);
    expect(result.month).toBe('01');
    expect(result.monthStr).toBe('JAN');
    expect(result.dayOfMonth).toBe('02');
    expect(result.hourOfDay).toBe('03');
    expect(result.minute).toBe('04');
    expect(result.second).toBe('05');
    expect(result.dayOfWeekStr).toBe('THU');
    expect(result.milliseconds).toBe(ts.toString().slice(10));
  });

  test('works even when Date.toLocaleString is unavailable for parsing', () => {
    const ts = Date.UTC(2020, 0, 2, 3, 4, 5, 678);
    const originalToLocaleString = Date.prototype.toLocaleString;

    Date.prototype.toLocaleString = function mockedToLocaleString() {
      throw new Error('unsupported locale formatting');
    };

    try {
      const result = decomposeTime(ts, { timezone: 'UTC' });
      expect(result.year).toBe(2020);
      expect(result.month).toBe('01');
      expect(result.dayOfMonth).toBe('02');
      expect(result.hourOfDay).toBe('03');
    } finally {
      Date.prototype.toLocaleString = originalToLocaleString;
    }
  });
});
