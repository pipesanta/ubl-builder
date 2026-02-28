import { TaxSubtotal, TaxTotal } from '../../ubl21/CommonAggregateComponents';

describe('CommonAggregateComponents.TaxTotal', () => {
  test('returns tax amount and supports setter/getter', () => {
    const taxTotal = new TaxTotal({ taxAmount: '19.00' } as any);
    expect(taxTotal.getTaxAmount()).toBe('19.00');

    taxTotal.setTaxAmount('20.00');
    expect(taxTotal.getTaxAmount()).toBe('20.00');
  });

  test('calculates total from subtotals using current implementation behavior', () => {
    const subtotal1 = new TaxSubtotal({ taxAmount: '10' } as any);
    const subtotal2 = new TaxSubtotal({ taxAmount: '2.5' } as any);
    const taxTotal = new TaxTotal({ taxAmount: '0', taxSubtotals: [subtotal1, subtotal2] } as any);

    expect(taxTotal.calculateTotalTaxAmount()).toBe('0102.5');
  });

  test('setTaxSubtotals validates array input and item type', () => {
    const taxTotal = new TaxTotal({ taxAmount: '0' } as any);

    expect(() => taxTotal.setTaxSubtotals({} as any)).toThrow('taxSubtotals must to be an Array');
    expect(() => taxTotal.setTaxSubtotals([{} as any])).toThrow(
      'Items of taxSubtotals must be instance of TaxSubtotal class',
    );
  });
});
