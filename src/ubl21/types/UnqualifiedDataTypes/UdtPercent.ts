import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumeric';

export type UdtPercentAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 */

export class UdtPercent extends CctNumericType {
  /**
   * 
   * @param content 
   * @param attributes 
   */
  constructor(content: string, attributes?: UdtPercentAttributes) {
    super(content, attributes);
  }
}
