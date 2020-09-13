import { UdtText } from '../..//ubl21/types/UnqualifiedDataTypes';

test('[UDT time]', () => {
  const value = new UdtText('Esta es la prueba', { languageID: 'es-co', languageLocaleID: 'CO' });
  const valueAsJson = value.parseToJson();
  const expected = { '#text': 'Esta es la prueba', '@languageID': 'es-co', '@languageLocaleID': 'CO' };
  expect(valueAsJson).toStrictEqual(expected);
});
