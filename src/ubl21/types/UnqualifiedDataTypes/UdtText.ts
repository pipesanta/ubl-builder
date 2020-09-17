import { CctTextType, AllowedAttributes } from './essentials/cct/CctText';

export type UdtTextAttributes = AllowedAttributes;

/**
 * udt:TextType
 * A character string (i.e. a finite set of characters), generally in the form of words of a language.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 */
export class UdtText extends CctTextType {
  /**
   *
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes?: UdtTextAttributes) {
    super(content, attributes);
  }
}
