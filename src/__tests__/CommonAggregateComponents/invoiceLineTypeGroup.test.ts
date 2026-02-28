import { InvoiceLine, Item, Price, TaxTotal } from '../../ubl21/CommonAggregateComponents';

describe('CommonAggregateComponents.InvoiceLine', () => {
  test('sets and gets line extension amount', () => {
    const invoiceLine = new InvoiceLine({
      id: '1',
      invoicedQuantity: '2',
      lineExtensionAmount: '100.00',
      item: new Item({} as any),
      price: new Price({ priceAmount: '50.00' }),
    } as any);

    expect(invoiceLine.getLineExtensionAmount()).toBe('100.00');

    invoiceLine.setLineExtensionAmount('150.00');
    expect(invoiceLine.getLineExtensionAmount()).toBe('150.00');
  });

  test('setTaxTotals validates input type and stores list', () => {
    const invoiceLine = new InvoiceLine({
      id: '1',
      invoicedQuantity: '2',
      lineExtensionAmount: '100.00',
      item: new Item({} as any),
      price: new Price({ priceAmount: '50.00' }),
    } as any);

    expect(() => invoiceLine.setTaxTotals({} as any)).toThrow('value must to be an Array');
    expect(() => invoiceLine.setTaxTotals([{} as any])).toThrow('All items must to be instance of TaxTotal class');

    const taxTotals = [new TaxTotal({ taxAmount: '19.00' } as any)];
    invoiceLine.setTaxTotals(taxTotals);

    expect(invoiceLine.getTaxTotals()).toHaveLength(1);
  });

  test('setId and getPrice expose current values', () => {
    const price = new Price({ priceAmount: '50.00' });
    const invoiceLine = new InvoiceLine({
      id: '1',
      invoicedQuantity: '2',
      lineExtensionAmount: '100.00',
      item: new Item({} as any),
      price,
    } as any);

    invoiceLine.setId('99');

    const json = invoiceLine.parseToJson();
    expect(json['cbc:ID']['#text']).toBe('99');
    expect(invoiceLine.getPrice()).toBe(price);
  });
});
