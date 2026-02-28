import { addition, fixDecimals } from '../../tools/mathTools';

describe('mathTools.addition', () => {
  test('returns scaled integer sum as string using default precision', () => {
    expect(addition([1.2, 2.3])).toBe('350');
  });

  test('returns zero for empty input', () => {
    expect(addition([])).toBe('0');
  });
});

describe('mathTools.fixDecimals', () => {
  test('formats regular decimal values', () => {
    expect(fixDecimals(123.45)).toBe('123.45');
  });

  test('returns default for invalid numbers', () => {
    expect(fixDecimals('invalid-number')).toBe('0.00');
  });

  test('supports custom decimal digits', () => {
    expect(fixDecimals(12.3, 3)).toBe('12.300');
  });
});
