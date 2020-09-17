import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumeric';

export type UdtNumericAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 * Se More: http://www.datypic.com/sc/ubl21/t-udt_NumericType.html
 * 
 */

export class UdtNumeric extends CctNumericType {
  /**
   *
   * @param content value
   * @param attributes attributes
   */
  constructor(content: string, attributes?: UdtNumericAttributes) {
    super(content, attributes);
  }
}
