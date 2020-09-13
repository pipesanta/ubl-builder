import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumericType';

export type UdtPercentTypeAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 */

export class UdtPercentType extends CctNumericType {
  /**
   *
   * @param {string} content
   * @param {UdtPercentTypeAttributes} attributes
   */
  constructor(content: string, attributes?: UdtPercentTypeAttributes) {
    super(content, attributes);
  }
}
