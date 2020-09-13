// 'use strict'

import AnyExtensionContent from '../AnyExtensionContent';
import { IGenericKeyValue, ParamsMapValues } from '../../CommonAggregateComponents/GenericAggregateComponent';

// const { AnyExtensionContent } = require("../AnyExtensionContent");
// const { SignatureExtensionsContent, SignatureExtensionsContentParams } = require("./DianExtensionContent");

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  // ##################################  TODO CAC MISSING ################################################
  // signature: { order: 1,  attributeName: 'ds:Signature', min: 0, max: 1, classRef: SignatureExtensionsContent }
};

type AllowedParams = {
  signature: string;
};

/**
 *
 */
class SignatureExtensions extends AnyExtensionContent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:SignatureExtensions');
  }

  // /**
  //  *
  //  * @param { SignatureExtensionsContent | SignatureExtensionsContentParams } value
  //  */
  // setSignatureExtensionsContent(value: SignatureExtensionsContent | SignatureExtensionsContentParams){
  //   console.log(value);
  //   throw "not implemented"
  // }
}

export { SignatureExtensions, AllowedParams as SignatureExtensionsParams };
