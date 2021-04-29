import { CctQuantityType, AllowedAttributes } from './essentials/cct/CctQuantity';

export type UdtQuantityAttributes = AllowedAttributes;
/**
 * udt:QuantityType
 * A counted number of non-monetary units, possibly including a fractional part.
 *
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_QuantityType.html
 *
 */
export class UdtQuantity extends CctQuantityType {
  /**
   *
   * @param {string} content
   * @param {UdtQuantityAttributes} attributes
   */
  constructor(content: string, attributes?: UdtQuantityAttributes) {
    super(content, attributes);
  }
}
