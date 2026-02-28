import { AddressLine } from '../../ubl21/CommonAggregateComponents';
import { UdtText } from '../../ubl21/types/UnqualifiedDataTypes';

describe('CommonAggregateComponents.AddressLine', () => {
  test('requires line in constructor (cbc:Line is 1..1)', () => {
    expect(() => new AddressLine({} as any)).toThrow('line is required');
  });

  test('accepts UdtText in constructor', () => {
    const addressLine = new AddressLine({ line: new UdtText('Line from UDT') });

    expect(addressLine.getLine(true)).toBe('Line from UDT');
    expect(addressLine.getLine()).toBeInstanceOf(UdtText);
  });

  test('serializes cbc:Line from constructor payload', () => {
    const addressLine = new AddressLine({ line: '123 Standard Chartered Tower' });

    const json = addressLine.parseToJson();
    expect(json['cbc:Line']['#text']).toBe('123 Standard Chartered Tower');
  });

  test('serializes cbc:Line to XML', () => {
    const addressLine = new AddressLine({ line: 'Main street 10' });

    const xml = addressLine.getAsXml(false, false);
    expect(xml).toContain('<cbc:Line>Main street 10</cbc:Line>');
  });

  test('setLine updates value and getLine supports raw mode', () => {
    const addressLine = new AddressLine({ line: 'Line 1' });

    const result = addressLine.setLine('Line 2');

    expect(result).toBe(addressLine);
    expect(addressLine.getLine(true)).toBe('Line 2');
    expect((addressLine.getLine() as any).content).toBe('Line 2');
  });

  test('setLine accepts UdtText instances', () => {
    const addressLine = new AddressLine({ line: 'Line 1' });

    const input = new UdtText('Line 2 from UDT');
    addressLine.setLine(input);

    expect(addressLine.getLine()).toBe(input);
    expect(addressLine.getLine(true)).toBe('Line 2 from UDT');
  });

  test('setLine supports fluent chaining', () => {
    const addressLine = new AddressLine({ line: 'Line 1' });

    addressLine.setLine('Line 2').setLine('Line 3');

    expect(addressLine.getLine(true)).toBe('Line 3');
  });

  test('setLine rejects nullish values', () => {
    const addressLine = new AddressLine({ line: 'Line 1' });

    expect(() => addressLine.setLine(null as any)).toThrow('line is required');
    expect(() => addressLine.setLine(undefined as any)).toThrow('line is required');
  });
});
