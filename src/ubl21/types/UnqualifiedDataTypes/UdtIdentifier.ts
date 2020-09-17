import { CctIdentifierType, AllowedAttributes } from './essentials/cct/CctIdentifier';

/**
 * udt:IdentifierType
 *  A character string to identify and uniquely distinguish one instance of an object in an identification scheme from all 
 *  other objects in the same scheme, together with relevant supplementary information.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_IdentifierType.html
 * 
 */
export class UdtIdentifier extends CctIdentifierType {
  /**
   * @param {string} content
   * @param {UdtIdentifierAttributes} attributes
   */
  constructor(content: string, attributes?: AllowedAttributes) {
    super(content, attributes);
  }
}

export type UdtIdentifierAttributes = AllowedAttributes;
