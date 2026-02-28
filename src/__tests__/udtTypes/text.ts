import { UdtText } from '../..//ubl21/types/UnqualifiedDataTypes';

describe('UdtText', () => {
  test('serializes content only when no attributes are given', () => {
    const value = new UdtText('Plain text');

    expect(value.parseToJson()).toStrictEqual({ '#text': 'Plain text' });
  });

  test('serializes with both language attributes from constructor', () => {
    const value = new UdtText('Esta es la prueba', { languageID: 'es-co', languageLocaleID: 'CO' });
    const expected = { '#text': 'Esta es la prueba', '@languageID': 'es-co', '@languageLocaleID': 'CO' };

    expect(value.parseToJson()).toStrictEqual(expected);
  });

  test('serializes only languageID when languageLocaleID is absent', () => {
    const value = new UdtText('Hola', { languageID: 'es' });

    expect(value.parseToJson()).toStrictEqual({ '#text': 'Hola', '@languageID': 'es' });
  });

  test('serializes only languageLocaleID when languageID is absent', () => {
    const value = new UdtText('Hola', { languageLocaleID: 'CO' });

    expect(value.parseToJson()).toStrictEqual({ '#text': 'Hola', '@languageLocaleID': 'CO' });
  });

  test('supports fluent setters for language attributes', () => {
    const value = new UdtText('Hello').setLanguageID('en').setLanguageLocaleID('US');

    expect(value.parseToJson()).toStrictEqual({
      '#text': 'Hello',
      '@languageID': 'en',
      '@languageLocaleID': 'US',
    });
  });

  test('keeps empty string content as valid text value', () => {
    const value = new UdtText('');

    expect(value.parseToJson()).toStrictEqual({ '#text': '' });
  });
});
