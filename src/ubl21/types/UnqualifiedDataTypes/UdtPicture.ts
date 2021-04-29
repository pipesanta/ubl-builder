import { CctBinaryObjectType, AllowedAttributes } from './essentials/cct/CctBinaryObject';

export type UdtPictureAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See More: http://www.datypic.com/sc/ubl21/t-udt_PictureType.html
 */

export class UdtPicture extends CctBinaryObjectType {
  /**
   *
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes?: UdtPictureAttributes) {
    super(content, attributes);
  }
}
