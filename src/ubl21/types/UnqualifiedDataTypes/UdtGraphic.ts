import { CctBinaryObjectType, AllowedAttributes } from './essentials/cct/CctBinaryObject';

export type UdtGraphicAttributes = AllowedAttributes;

/**
 *  udt:GraphicType
 *  A diagram, graph, mathematical curve, or similar representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
export class UdtGraphic extends CctBinaryObjectType {
  /**
   *
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes: UdtGraphicAttributes) {
    super(content, attributes);
  }
}
