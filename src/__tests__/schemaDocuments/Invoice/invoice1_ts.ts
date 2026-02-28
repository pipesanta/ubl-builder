import { Invoice } from '../../../ubl21/schemaDocuments';

const invoiceOptions = {
  enviroment: '1',
  issuer: {
    prefix: '4999',
    resolutionNumber: '321654987',
    startDate: '10-10-2020',
    endDate: '12-12-12',
    startRange: '1000',
    endRange: '1000',
    technicalKey: '123123123123',
  },
  software: {
    id: '123123',
    pin: '123456789',
    providerNit: '91919191-90',
  },
};

describe('Invoice (TypeScript usage)', () => {
  test('validates constructor arguments', () => {
    expect(() => new Invoice('', invoiceOptions as any)).toThrow('invoice ID is required');
    expect(() => new Invoice('INV-1', null as any)).toThrow('options object is required required');
    expect(() => new Invoice('INV-1', { ...invoiceOptions, enviroment: '3' } as any)).toThrow(
      'Enviroment value is not allowed',
    );
  });

  test('adds default properties and basic fields to XML', () => {
    const inv = new Invoice('123456789', { ...invoiceOptions });
    inv.setDefaultProperties();
    inv.setID('123456789');
    inv.setUBLVersionID('UBL 2.1');
    inv.setIssueDate('2026-02-27');
    inv.setIssueTime('10:15:45-05:00');
    inv.addNote('Testing note', { languageID: 'en' });

    const xml = inv.getXml(false, false);

    expect(xml).toContain('xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"');
    expect(xml).toContain('<cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>');
    expect(xml).toContain('<cbc:ID>123456789</cbc:ID>');
    expect(xml).toContain('<cbc:IssueDate>2026-02-27</cbc:IssueDate>');
    expect(xml).toContain('<cbc:IssueTime>10:15:45-05:00</cbc:IssueTime>');
    expect(xml).toContain('<cbc:Note languageID="en">Testing note</cbc:Note>');
  });

  test('generates DIAN extension and keeps QR null before finalize', () => {
    const inv = new Invoice('123456789', { ...invoiceOptions });
    inv.setID('123456789');
    inv.calculateDianExtension();

    const xml = inv.getXml(false, false);
    expect(xml).toContain('<ext:UBLExtensions>');
    expect(inv.getQRCode()).toBeNull();
  });

  test('setID/getID works for raw and object modes', () => {
    const inv = new Invoice('123456789', { ...invoiceOptions });
    inv.setID('ABC-001');
    expect(inv.getID()).toBe('ABC-001');
    expect((inv.getID(false) as any).content).toBe('ABC-001');
  });
});
