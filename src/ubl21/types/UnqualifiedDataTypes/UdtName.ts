import { CctTextType, AllowedAttributes } from './essentials/cct/CctText';

export type UdtNameAttributes = AllowedAttributes;

/**
 * udt:NameType
 * A character string that constitutes the distinctive designation of a person, place, thing or concept.
 * 
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 */
export class UdtName extends CctTextType {
  /**
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes?: UdtNameAttributes) {
    super(content, attributes);
  }
}
