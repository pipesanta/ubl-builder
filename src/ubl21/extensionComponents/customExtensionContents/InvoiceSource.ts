// 'use strict'

import GenericAggregateComponent, {
  IGenericKeyValue,
  ParamsMapValues,
} from '../../CommonAggregateComponents/GenericAggregateComponent';
import { UdtCode } from '../../types/UnqualifiedDataTypes';

// const GenericAggregateComponent = require("../../CommonAggregateComponents/GenericAggregateComponent");

// /* TODO GANERIC CLASSES */

// const { UdtCode } = require("../../types/UnqualifiedDataTypes");

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  identificationCode: { order: 1, attributeName: 'cbc:IdentificationCode', min: 0, max: 1, classRef: UdtCode },
};

type AllowedParams = {
  identificationCode?: string | UdtCode | any;
};

/**
 * Body of Dian extension content
 */
class InvoiceSource extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'sts:InvoiceSource');
  }
}

export { InvoiceSource, AllowedParams as InvoiceSourceParams };
