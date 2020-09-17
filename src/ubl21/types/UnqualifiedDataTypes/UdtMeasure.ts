import { CctMeasureType, AllowedAttributes } from './essentials/cct/CctMeasure';

export type UdtMeasureAttributes = AllowedAttributes;
/**
 * udt:MeasureType
 * A numeric value determined by measuring an object using a specified unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 */

export class UdtMeasure extends CctMeasureType {
  constructor(content: string, attributes: UdtMeasureAttributes) {
    super(content, attributes);
  }
}
