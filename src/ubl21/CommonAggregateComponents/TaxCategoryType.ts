import GenericAggregateComponent from './GenericAggregateComponent';
import { TaxCategoryTypeParams as AllowedParams, TaxCategoryTypeParamsMap as ParamsMap } from './TaxCategoryTypeGroup';
import { UdtPercent } from '../types/UnqualifiedDataTypes/UdtPercent';
import { TaxScheme } from './TaxScheme';

export class TaxCategoryType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:TaxCategoryType');
  }

  setPercent(value: string | UdtPercent) {
    this.attributes.percent = value instanceof UdtPercent ? value : new UdtPercent(value);
  }

  /**
   * @returns { string | UdtPercent }
   */
  getPercent(rawValue = true) {
    return rawValue ? this.attributes.percent.content : this.attributes.percent;
  }

  getTaxScheme(): TaxScheme {
    return this.attributes.taxScheme;
  }
}
