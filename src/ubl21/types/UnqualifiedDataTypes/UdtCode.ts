import { CctCodeType, AllowedAttributes } from './essentials/cct/CctCodeType';

export type UdtCodeAttributes = AllowedAttributes;

export class UdtCode extends CctCodeType {
  /**
   *
   * @param content
   * @param attributes
   */
  constructor(content: string, attributes?: UdtCodeAttributes) {
    super(content, attributes);
  }
}
