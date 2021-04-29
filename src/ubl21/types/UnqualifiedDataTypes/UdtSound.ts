import { CctBinaryObjectType, AllowedAttributes } from './essentials/cct/CctBinaryObject';

export type UdtSoundAttributes = AllowedAttributes;

/**
 * udt:SoundType
 * An audio representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * Type based on xsd:base64Binary
 * See More: http://www.datypic.com/sc/ubl21/t-udt_SoundType.html
 *
 */
export class UdtSound extends CctBinaryObjectType {
  /**
   *
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes: UdtSoundAttributes) {
    super(content, attributes);
  }
}
