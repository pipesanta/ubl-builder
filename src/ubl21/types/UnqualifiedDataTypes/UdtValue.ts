import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumeric';

/**
 * udt:TimeType
 * An instance of time that occurs every day.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See more: http://www.datypic.com/sc/ubl21/t-udt_TimeType.html
 *
 */
export class UdtValue extends CctNumericType {
  constructor(content: string, attributes: AllowedAttributes) {
    super(content, attributes);
  }
}
