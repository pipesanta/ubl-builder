import { AllowedAttributes, CctBinaryObjectType } from './essentials/cct/CctBinaryObjectType';

export type UdtBinaryObjectAttributes = AllowedAttributes;

export class UdtBinaryObjectType extends CctBinaryObjectType {
  constructor(content: string, attributes: UdtBinaryObjectAttributes) {
    super(content, attributes);
  }
}
