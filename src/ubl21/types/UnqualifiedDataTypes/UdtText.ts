import { CctTextType, AllowedAttributes } from './essentials/cct/CctTextType';

export type UdtTextAttributes = AllowedAttributes;

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
