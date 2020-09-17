import { CctBinaryObjectType, AllowedAttributes } from './essentials/cct/CctBinaryObject';

export type UdtVideoAttributes = AllowedAttributes;

/**
 * udt:VideoType
 * A video representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * 
 */
export class UdtVideo extends CctBinaryObjectType {
  /**
   * 
   * @param content 
   * @param attributes 
   */
  constructor(content: string, attributes: UdtVideoAttributes ) {
    super(content, attributes);
  }
}
