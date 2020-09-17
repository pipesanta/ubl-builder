import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumeric';

export type UdtRateAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * 
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 * See More: http://www.datypic.com/sc/ubl21/t-udt_RateType.html
 * 
 */

export class UdtRate extends CctNumericType {
  constructor(content: string, attributes: UdtRateAttributes) {
    super(content, attributes);
  }
}
