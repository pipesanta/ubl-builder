// 'use strict'

import AnyExtensionContent from '../AnyExtensionContent';
import { DianExtensionsContent, DianExtensionsContentParams } from './DianExtensionContent';

// const { AnyExtensionContent } = require("../AnyExtensionContent");
// const { DianExtensionsContent, DianExtensionsContentParams } = require("./DianExtensionContent");

const ParamsMap = {
  // ##################################  TODO CAC MISSING ################################################
  dianExtensions: { order: 1, attributeName: 'sts:DianExtensions', min: 0, max: 1, classRef: DianExtensionsContent },
};

type AllowedParams = {
  /** Dian Extension content */
  dianExtensions: DianExtensionsContent;
};

/**
 * Any element [1..1] Namespace: ##other, Process Contents: lax
 */
class DianExtensions extends AnyExtensionContent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DianExtensions');
  }

  setDianExtensionsContent(value: DianExtensionsContent | DianExtensionsContentParams) {
    // console.log(value);
    throw new Error('not implemented');
  }

  /**
   * @returns {DianExtensionsContent}
   */
  getDianExtensionsContent() {
    return this.attributes.dianExtensions;
  }
}

export { DianExtensions, AllowedParams as DianExtensionsParams };
