import { CctAmountType, AllowedAttributes } from './essentials/cct/CctAmount';

export type UdtAmountAttributes = AllowedAttributes;
/**
 * udt:AmountType
 * A number of monetary units specified using a given unit of currency.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 * CCTS properties:

    Unique I D: UBLUDT000001
    Category Code: UDT
    Dictionary Entry Name: Amount. Type
    Version I D: 1.0
    Definition: A number of monetary units specified using a given unit of currency.
    Representation Term Name: Amount

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
