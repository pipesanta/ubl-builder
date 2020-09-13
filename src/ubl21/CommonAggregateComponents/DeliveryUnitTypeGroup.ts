// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtQuantity, UdtIndicator } from '../types/UnqualifiedDataTypes';
/*

cbc:BatchQuantity [1..1]    The quantity of ordered Items that constitutes a batch for delivery purposes.
cbc:ConsumerUnitQuantity [0..1]    The quantity of units in the Delivery Unit expressed in the units used by the consumer.
cbc:HazardousRiskIndicator [0..1]    An indication that the transported goods are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  batchQuantity: { order: 1, attributeName: 'cbc:BatchQuantity', min: 0, max: 1, classRef: UdtQuantity },
  consumerUnitQuantity: { order: 1, attributeName: 'cbc:ConsumerUnitQuantity', min: 0, max: 1, classRef: UdtQuantity },
  hazardousRiskIndicator: {
    order: 1,
    attributeName: 'cbc:HazardousRiskIndicator',
    min: 0,
    max: 1,
    classRef: UdtIndicator,
  },
};

type AllowedParams = {
  batchQuantity?: string | UdtQuantity;
  consumerUnitQuantity?: string | UdtQuantity;
  hazardousRiskIndicator?: string | UdtIndicator;
};

/**
 *
 */
class DeliveryUnitType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DeliveryUnitType');
  }
}

export {
  DeliveryUnitType as DeliveryUnit,
  AllowedParams as DeliveryUnitTypeParams,
  DeliveryUnitType as MinimumDeliveryUnit,
  DeliveryUnitType as MaximumDeliveryUnit,
};
