import { UdtTime } from '../..//ubl21/types/UnqualifiedDataTypes';

test('[UDT time]', () => {
  const value = new UdtTime('12-12-2020');
  const valueAsJson = value.parseToJson();
  const expected = { '#text': '12-12-2020' };
  expect(valueAsJson).toStrictEqual(expected);
});
