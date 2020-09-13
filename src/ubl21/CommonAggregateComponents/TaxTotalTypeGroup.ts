import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmountType';
import { UdtIndicator, UdtIdentifier } from '../types/UnqualifiedDataTypes';
import { TaxSubtotal } from './TaxSubtotal';

/*

  1  cbc:TaxAmount [1..1]    The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax category within the taxation scheme.
  2  cbc:RoundingAmount [0..1]    The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.
  3  cbc:TaxEvidenceIndicator [0..1]    An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).
  4  cbc:TaxIncludedIndicator [0..1]    An indicator that tax is included in the calculation (true) or not (false).
  5  cac:TaxSubtotal [0..*]    One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  taxAmount: { order: 1, attributeName: 'cbc:TaxAmount', min: 1, max: 1, classRef: UdtAmount },
  roundingAmount: { order: 2, attributeName: 'cbc:RoundingAmount', min: 0, max: 1, classRef: UdtAmount },
  taxEvidenceIndicator: { order: 3, attributeName: 'cbc:TaxEvidenceIndicator', min: 0, max: 1, classRef: UdtIndicator },
  taxIncludedIndicator: { order: 4, attributeName: 'cac:TaxIncludedIndicator', min: 0, max: 1, classRef: UdtIndicator },
  taxSubtotals: { order: 5, attributeName: 'cac:TaxSubtotal', min: 0, max: undefined, classRef: TaxSubtotal },
};

type AllowedParams = {
  taxAmount: string | UdtAmount;
  roundingAmount: string | UdtAmount;
  taxEvidenceIndicator: string | UdtIndicator;
  taxSubtotals: TaxSubtotal[];
};

/**
 *
 */
class TaxTotalType extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:TaxTotalType');
  }

  /**
   *
   * @param { UdtAmount | string } value
   */
  setTaxAmount(value: string | UdtAmount) {
    this.attributes.taxAmount = value instanceof UdtAmount ? value : new UdtAmount(value);
  }

  /**
   *
   * @param {boolean} raw raw value
   */
  getTaxAmount(raw = true) {
    return raw ? this.attributes.taxAmount.content : this.attributes.taxAmount;
  }

  getTaxSubtotals(): TaxSubtotal[] {
    return this.attributes.taxSubtotals;
  }

  setTaxSubtotals(taxSubtotals: TaxSubtotal[]) {
    if (!Array.isArray(taxSubtotals)) throw new Error('taxSubtotals must to be an Array');
    taxSubtotals.forEach((value) => {
      if (!(value instanceof TaxSubtotal)) {
        throw new Error('Items of taxSubtotals must be instance of TaxSubtotal class');
      }
    });

    this.attributes.taxSubtotals = taxSubtotals;
  }

  calculateTotalTaxAmount() {
    return this.attributes.taxSubtotals.reduce((acc: number, current: TaxSubtotal) => {
      return acc + current.getTaxAmount();
    }, 0);
  }
}

export { TaxTotalType as TaxTotal, AllowedParams as TaxTotalTypeParams, TaxTotalType as WithholdingTaxTotal };
