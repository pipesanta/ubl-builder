import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
import { UdtQuantity, UdtText, UdtCode } from '../types/UnqualifiedDataTypes';
import { UdtRate } from '../types/UnqualifiedDataTypes/UdtRate';
import { ValidityPeriod } from './ValidityPeriod';
import { AllowanceCharge } from './AllowanceChargeTypeGroup';
import { PriceList } from './PriceListTypeGroup';
import { PricingExchangeRate } from './ExchangeRateTypeGroup';

/*

  1    cbc:PriceAmount [1..1]    The amount of the price.
  2    cbc:BaseQuantity [0..1]    The quantity at which this price applies.
  3    cbc:PriceChangeReason [0..*]    A reason for a price change.
  4    cbc:PriceTypeCode [0..1]    The type of price, expressed as a code.
  5    cbc:PriceType [0..1]    The type of price, expressed as text.
  6    cbc:OrderableUnitFactorRate [0..1]    The factor by which the base price unit can be converted to the orderable unit.
  7    cac:ValidityPeriod [0..*]    A period during which this price is valid.
  8    cac:PriceList [0..1]    Information about a price list applicable to this price.
  9    cac:AllowanceCharge [0..*]    An allowance or charge associated with this price.
  10    cac:PricingExchangeRate [0..1]    The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a whole.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  priceAmount: { order: 1, attributeName: 'cbc:PriceAmount', min: 0, max: 1, classRef: UdtAmount },
  baseQuantity: { order: 2, attributeName: 'cbc:BaseQuantity', min: 0, max: 1, classRef: UdtQuantity },
  priceChangeReasons: { order: 3, attributeName: 'cbc:PriceChangeReason', min: 0, max: 1, classRef: UdtText },
  priceTypeCode: { order: 4, attributeName: 'cbc:PriceTypeCode', min: 0, max: 1, classRef: UdtCode },
  priceType: { order: 5, attributeName: 'cbc:PriceType', min: 0, max: 1, classRef: UdtText },
  orderableUnitFactorRate: {
    order: 6,
    attributeName: 'cbc:OrderableUnitFactorRate',
    min: 0,
    max: 1,
    classRef: UdtRate,
  },
  validityPeriods: { order: 7, attributeName: 'cac:ValidityPeriod', min: 0, max: 1, classRef: ValidityPeriod },
  priceList: { order: 8, attributeName: 'cac:PriceList', min: 0, max: 1, classRef: PriceList },
  allowanceCharges: {
    order: 9,
    attributeName: 'cac:AllowanceCharge',
    min: 0,
    max: undefined,
    classRef: AllowanceCharge,
  },
  pricingExchangeRate: {
    order: 9,
    attributeName: 'cac:PricingExchangeRate',
    min: 0,
    max: 1,
    classRef: PricingExchangeRate,
  },

  // ##################################  TODO CAC MISSING ################################################

  // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //

  // ##################################  TODO CAC MISSING ################################################
};

type AllowedParams = {
  priceAmount: string | UdtAmount;     // The amount of the price. MANADATORY
  baseQuantity?: string | UdtQuantity;
  priceChangeReasons?: string | UdtText;
  priceTypeCode?: string | UdtCode;
  priceType?: string | UdtText;
  orderableUnitFactorRate?: string | UdtRate;
  validityPeriods?: ValidityPeriod;
  priceList?: PriceList;
  allowanceCharges?: AllowanceCharge;
  pricingExchangeRate?: PricingExchangeRate;
};

/**
 *
 */
class Price extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:Price');
  }

  setPriceAmount(value: string | UdtAmount) {
    this.attributes.priceAmount = value instanceof UdtAmount ? value : new UdtAmount(value);
  }

  /**
   *
   * @param {boolean} [rawValue=true]
   */
  getPriceAmount(rawValue = true) {
    return rawValue ? this.attributes.priceAmount.content : this.attributes.priceAmount;
  }

  /**
   *
   * @param { UdtQuantity | string | number} value
   */
  setBaseQuantity(value: string | UdtQuantity) {
    this.attributes.baseQuantity = value instanceof UdtQuantity ? value : new UdtQuantity(value);
  }

  /**
   *
   * @param {boolean} rawValue
   */
  getBaseQuantity(rawValue = true) {
    return rawValue ? this.attributes.baseQuantity.content : this.attributes.baseQuantity;
  }
}

export { Price, AllowedParams as PriceParams };
