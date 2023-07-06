import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
import { UdtNumeric } from '../types/UnqualifiedDataTypes/UdtNumeric';
import { UdtPercent } from '../types/UnqualifiedDataTypes/UdtPercent';
import { UdtMeasure, UdtText } from '../types/UnqualifiedDataTypes';
import { TaxCategory } from './TaxCategoryTypeGroup';

/*

  1  cbc:TaxableAmount [0..1]    The net amount to which the tax percent (rate) is applied to calculate the tax amount.
  2  cbc:TaxAmount [1..1]    The amount of this tax subtotal.
  3  cbc:CalculationSequenceNumeric [0..1]    The number of this tax subtotal in the sequence of subtotals corresponding to the order in which multiple taxes are applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential), then CalculationSequenceNumeric is 1 for all tax subtotals applied to a given amount.
  4  cbc:TransactionCurrencyTaxAmount [0..1]    The amount of this tax subtotal, expressed in the currency used for invoicing.
  5  cbc:Percent [0..1]    The tax rate of the tax category applied to this tax subtotal, expressed as a percentage.
  6  cbc:BaseUnitMeasure [0..1]    The unit of measure on which the tax calculation is based
  7  cbc:PerUnitAmount [0..1]    Where a tax is applied at a certain rate per unit, the rate per unit applied.
  8  cbc:TierRange [0..1]    Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax subtotal.
  9  cbc:TierRatePercent [0..1]    Where a tax is tiered, the tax rate that applies within a specified range of taxable amounts for this tax subtotal.
  10  cac:TaxCategory [1..1]    The tax category applicable to this subtotal.

*/

const ParamsMap = {
  taxableAmount: { order: 1, attributeName: 'cbc:TaxableAmount', min: 0, max: 1, classRef: UdtAmount },
  taxAmount: { order: 2, attributeName: 'cbc:TaxAmount', min: 1, max: 1, classRef: UdtAmount },
  calculationSequenceNumeric: {
    order: 3,
    attributeName: 'cbc:CalculationSequenceNumeric',
    min: 0,
    max: 1,
    classRef: UdtNumeric,
  },
  transactionCurrencyTaxAmount: {
    order: 4,
    attributeName: 'cbc:TransactionCurrencyTaxAmount',
    min: 0,
    max: 1,
    classRef: UdtAmount,
  },
  percent: { order: 5, attributeName: 'cbc:Percent', min: 0, max: 1, classRef: UdtPercent },
  baseUnitMeasure: { order: 6, attributeName: 'cbc:BaseUnitMeasure', min: 0, max: 1, classRef: UdtMeasure },
  perUnitAmount: { order: 7, attributeName: 'cbc:PerUnitAmount', min: 0, max: 1, classRef: UdtAmount },
  tierRange: { order: 8, attributeName: 'cbc:TierRange', min: 0, max: 1, classRef: UdtText },
  tierRatePercent: { order: 9, attributeName: 'cbc:TierRatePercent', min: 0, max: 1, classRef: UdtPercent },
  taxCategory: { order: 10, attributeName: 'cac:TaxCategory', min: 1, max: 1, classRef: TaxCategory },
};

type AllowedParams = {
  taxableAmount: string | UdtAmount;
  taxAmount: string | UdtAmount;
  calculationSequenceNumeric?: string | UdtNumeric;
  transactionCurrencyTaxAmount?: string | UdtAmount;
  percent?: string | UdtPercent;
  baseUnitMeasure?: string | UdtMeasure;
  perUnitAmount?: string | UdtAmount;
  tierRange?: string | UdtText;
  tierRatePercent?: string | UdtPercent;
  taxCategory: TaxCategory;
};

/**
 *
 */
class TaxSubtotal extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:TaxSubtotal');
  }

  /**
   *
   * @param {boolean} rawValue
   */
  getTaxableAmount(rawValue = true) {
    return rawValue ? this.attributes.taxableAmount.content : this.attributes.taxableAmount;
  }

  setTaxableAmount(value: string | UdtAmount) {
    this.attributes.taxableAmount = value instanceof UdtAmount ? value : new UdtAmount(value);
  }

  /**
   *
   * @param {boolean} rawValue
   *
   */
  getTaxAmount(rawValue = true) {
    return rawValue ? this.attributes.taxAmount.content : this.attributes.taxAmount;
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
   * @param {*} rawValue
   */
  getPercent(rawValue = true) {
    return rawValue ? this.attributes.percent.content : this.attributes.percentage;
  }

  /**
   *
   * @param { UdtPercent | string} value
   */
  setPercent(value: string | UdtPercent) {
    this.attributes.percent = value instanceof UdtPercent ? value : new UdtPercent(value);
  }

  /**
   *
   * @param {TaxCategory} value
   */
  setTaxCategory(value: TaxCategory) {
    if (!(value instanceof TaxCategory)) throw new Error('Value must be instace of TaxCategory');

    this.attributes.taxCategory = value;
  }

  getTaxCategory(): TaxCategory {
    return this.attributes.taxCategory;
  }
}

export { TaxSubtotal, AllowedParams as TaxSubtotalParams };
