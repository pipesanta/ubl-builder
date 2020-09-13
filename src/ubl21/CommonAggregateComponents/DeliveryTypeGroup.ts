// 'use strict'

import { UdtIdentifier, UdtQuantity, UdtDate, UdtTime } from '../types/UnqualifiedDataTypes';
import { DeliveryAddress } from './AddressTypeGroup';
import { DeliveryLocation, AlternativeDeliveryLocation } from './LocationTypeGroup';
import { RequestedDeliveryPeriod, PromisedDeliveryPeriod, EstimatedDeliveryPeriod } from './PeriodTypeGroup';
import { CarrierParty, DeliveryParty, NotifyParty } from './PartyTypeGroup';
import { Despatch } from './Despatch';
import { MinimumDeliveryUnit, MaximumDeliveryUnit } from './DeliveryUnitTypeGroup';
import { ShipmentType } from './ShipmentTypeGroup';
import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';

/*

  1    cbc:ID [0..1]    An identifier for this delivery.
  2    cbc:Quantity [0..1]    The quantity of items, child consignments, shipments in this delivery.
  3    cbc:MinimumQuantity [0..1]    The minimum quantity of items, child consignments, shipments in this delivery.
  4    cbc:MaximumQuantity [0..1]    The maximum quantity of items, child consignments, shipments in this delivery.
  5    cbc:ActualDeliveryDate [0..1]    The actual date of delivery.
  6    cbc:ActualDeliveryTime [0..1]    The actual time of delivery.
  7    cbc:LatestDeliveryDate [0..1]    The latest date of delivery allowed by the buyer.
  8    cbc:LatestDeliveryTime [0..1]    The latest time of delivery allowed by the buyer.
  9    cbc:ReleaseID [0..1]    An identifier used for approval of access to delivery locations (e.g., port terminals).
  10    cbc:TrackingID [0..1]    The delivery Tracking ID (for transport tracking).
  11    cac:DeliveryAddress [0..1]    The delivery address.
  12    cac:DeliveryLocation [0..1]    The delivery location.
  13    cac:AlternativeDeliveryLocation [0..1]    An alternative delivery location.
  14    cac:RequestedDeliveryPeriod [0..1]    The period requested for delivery.
  15    cac:PromisedDeliveryPeriod [0..1]    The period promised for delivery.
  16    cac:EstimatedDeliveryPeriod [0..1]    The period estimated for delivery.
  17    cac:CarrierParty [0..1]    The party responsible for delivering the goods.
  18    cac:DeliveryParty [0..1]    The party to whom the goods are delivered.
  19    cac:NotifyParty [0..*]    A party to be notified of this delivery.
  20    cac:Despatch [0..1]    The despatch (pickup) associated with this delivery.
  21    cac:DeliveryTerms [0..*]    Terms and conditions relating to the delivery.
  22    cac:MinimumDeliveryUnit [0..1]    The minimum delivery unit for this delivery.
  23    cac:MaximumDeliveryUnit [0..1]    The maximum delivery unit for this delivery.
  24    cac:Shipment [0..1]    The shipment being delivered.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  quantity: { order: 2, attributeName: 'cbc:Quantity', min: 0, max: 1, classRef: UdtQuantity },
  minimumQuantity: { order: 3, attributeName: 'cbc:MinimumQuantity', min: 0, max: 1, classRef: UdtQuantity },
  maximumQuantity: { order: 4, attributeName: 'cbc:MaximumQuantity', min: 0, max: 1, classRef: UdtQuantity },
  actualDeliveryDate: { order: 5, attributeName: 'cbc:ActualDeliveryDate', min: 0, max: 1, classRef: UdtDate },
  actualDeliveryTime: { order: 6, attributeName: 'cbc:ActualDeliveryTime', min: 0, max: 1, classRef: UdtTime },
  latestDeliveryDate: { order: 7, attributeName: 'cbc:LatestDeliveryDate', min: 0, max: 1, classRef: UdtDate },
  latestDeliveryTime: { order: 8, attributeName: 'cbc:LatestDeliveryTime', min: 0, max: 1, classRef: UdtTime },
  releaseID: { order: 9, attributeName: 'cbc:ReleaseID', min: 0, max: 1, classRef: UdtIdentifier },
  trackingID: { order: 10, attributeName: 'cbc:TrackingID', min: 0, max: 1, classRef: UdtIdentifier },
  deliveryAddress: { order: 11, attributeName: 'cac:DeliveryAddress', min: 0, max: 1, classRef: DeliveryAddress },
  deliveryLocation: { order: 12, attributeName: 'cac:DeliveryLocation', min: 0, max: 1, classRef: DeliveryLocation },
  alternativeDeliveryLocation: {
    order: 13,
    attributeName: 'cac:AlternativeDeliveryLocation',
    min: 0,
    max: 1,
    classRef: AlternativeDeliveryLocation,
  },
  requestedDeliveryPeriod: {
    order: 14,
    attributeName: 'cac:RequestedDeliveryPeriod',
    min: 0,
    max: 1,
    classRef: RequestedDeliveryPeriod,
  },
  promisedDeliveryPeriod: {
    order: 15,
    attributeName: 'cac:PromisedDeliveryPeriod',
    min: 0,
    max: 1,
    classRef: PromisedDeliveryPeriod,
  },
  estimatedDeliveryPeriod: {
    order: 16,
    attributeName: 'cac:EstimatedDeliveryPeriod',
    min: 0,
    max: 1,
    classRef: EstimatedDeliveryPeriod,
  },
  carrierParty: { order: 17, attributeName: 'cac:CarrierParty', min: 0, max: 1, classRef: CarrierParty },
  deliveryParty: { order: 18, attributeName: 'cac:DeliveryParty', min: 0, max: 1, classRef: DeliveryParty },
  notifyParties: { order: 19, attributeName: 'cac:NotifyParty', min: 0, max: undefined, classRef: NotifyParty },
  despatch: { order: 20, attributeName: 'cac:Despatch', min: 0, max: 1, classRef: Despatch },
  deliveryTerms: { order: 21, attributeName: 'cac:DeliveryTerms', min: 0, max: undefined, classRef: UdtDate },
  minimumDeliveryUnit: {
    order: 22,
    attributeName: 'cac:MinimumDeliveryUnit',
    min: 0,
    max: 1,
    classRef: MinimumDeliveryUnit,
  },
  maximumDeliveryUnit: {
    order: 23,
    attributeName: 'cac:MaximumDeliveryUnit',
    min: 0,
    max: 1,
    classRef: MinimumDeliveryUnit,
  },
  shipment: { order: 24, attributeName: 'cbc:Shipment', min: 0, max: 1, classRef: ShipmentType },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  quantity: string | UdtQuantity;
  minimumQuantity: string | UdtQuantity;
  maximumQuantity: string | UdtQuantity;
  /** @type { UdtDate } */
  actualDeliveryDate: string | UdtDate;
  actualDeliveryTime: string | UdtTime;
  latestDeliveryDate: string | UdtDate;
  latestDeliveryTime: string | UdtTime;
  releaseID: string | UdtIdentifier;
  trackingID: string | UdtIdentifier;
  deliveryAddress: DeliveryAddress;
  deliveryLocation: DeliveryLocation;
  alternativeDeliveryLocation: AlternativeDeliveryLocation;
  requestedDeliveryPeriod: RequestedDeliveryPeriod;
  promisedDeliveryPeriod: PromisedDeliveryPeriod;
  estimatedDeliveryPeriod: EstimatedDeliveryPeriod;
  carrierParty: CarrierParty;
  deliveryParty: DeliveryParty;
  notifyParties: NotifyParty[];
  despatch: Despatch;
  deliveryTerms: UdtDate[];
  minimumDeliveryUnit: MinimumDeliveryUnit;
  maximumDeliveryUnit: MaximumDeliveryUnit;
  shipment: ShipmentType;
};

/**
 *
 */
class DeliveryType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DeliveryType');
  }
}

export { DeliveryType as Delivery, AllowedParams as DeliveryTypeParams };
