import { CctIdentifierType, AllowedAttributes } from './essentials/cct/CctIdentifierType';

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
