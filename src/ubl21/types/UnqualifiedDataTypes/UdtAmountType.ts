import { CctAmountType, AllowedAttributes } from './essentials/cct/CctAmountType';

export type UdtAmountAttributes = AllowedAttributes;
/**
 * A counted number of non-monetary units, possibly including a fractional part.
 */
export class UdtAmount extends CctAmountType {
  /**
   *
   * @param {XsdString} content
   * @param {UdtAmountAttributes} attributes
   */
  constructor(content: string, attributes?: UdtAmountAttributes) {
    super(content, attributes);
  }
}
