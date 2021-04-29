import { AllowedAttributes, CctBinaryObjectType } from './essentials/cct/CctBinaryObject';

export type UdtBinaryObjectAttributes = AllowedAttributes;

/**
 * udt:BinaryObjectType
 * A set of finite-length sequences of binary octets.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_BinaryObjectType.html
 * 
 */
export class UdtBinaryObject extends CctBinaryObjectType {
  constructor(content: string, attributes: UdtBinaryObjectAttributes) {
    super(content, attributes);
  }
}
