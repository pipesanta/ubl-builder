// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtDate, UdtTime, UdtText } from '../types/UnqualifiedDataTypes';
import { DespatchAddress } from './AddressTypeGroup';
import { DespatchLocation } from './LocationTypeGroup';
import { DespatchParty, CarrierParty, NotifyParty } from './PartyTypeGroup';
import { Contact } from './ContactTypeGroup';
import { EstimatedDespatchPeriod } from './PeriodTypeGroup';

/*

  1    cbc:ID [0..1]    An identifier for this despatch event.
  2    cbc:RequestedDespatchDate [0..1]    The despatch (pickup) date requested, normally by the buyer.
  3    cbc:RequestedDespatchTime [0..1]    The despatch (pickup) time requested, normally by the buyer.
  4    cbc:EstimatedDespatchDate [0..1]    The estimated despatch (pickup) date.
  5    cbc:EstimatedDespatchTime [0..1]    The estimated despatch (pickup) time.
  6    cbc:ActualDespatchDate [0..1]    The actual despatch (pickup) date.
  7    cbc:ActualDespatchTime [0..1]    The actual despatch (pickup) time.
  8    cbc:GuaranteedDespatchDate [0..1]    The date guaranteed for the despatch (pickup).
  9    cbc:GuaranteedDespatchTime [0..1]    The time guaranteed for the despatch (pickup).
  10    cbc:ReleaseID [0..1]    An identifier for the release of the despatch used as security control or cargo control (pick-up).
  11    cbc:Instructions [0..*]    Text describing any special instructions applying to the despatch (pickup).
  12    cac:DespatchAddress [0..1]    The address of the despatch (pickup).
  13    cac:DespatchLocation [0..1]    The location of the despatch (pickup).
  14    cac:DespatchParty [0..1]    The party despatching the goods.
  15    cac:CarrierParty [0..1]    The party carrying the goods.
  16    cac:NotifyParty [0..*]    A party to be notified of this despatch (pickup).
  17    cac:Contact [0..1]    The primary contact for this despatch (pickup).
  18    cac:EstimatedDespatchPeriod [0..1]    The period estimated for the despatch (pickup) of goods.
  19    cac:RequestedDespatchPeriod [0..1]    The period requested for the despatch (pickup) of goods.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  requestedDespatchDate: { order: 2, attributeName: 'cbc:RequestedDespatchDate', min: 0, max: 1, classRef: UdtDate },
  requestedDespatchTime: { order: 3, attributeName: 'cbc:RequestedDespatchTime', min: 0, max: 1, classRef: UdtTime },
  estimatedDespatchDate: { order: 4, attributeName: 'cbc:EstimatedDespatchDate', min: 0, max: 1, classRef: UdtDate },
  estimatedDespatchTime: { order: 5, attributeName: 'cbc:EstimatedDespatchTime', min: 0, max: 1, classRef: UdtTime },
  actualDespatchDate: { order: 6, attributeName: 'cbc:ActualDespatchDate', min: 0, max: 1, classRef: UdtDate },
  actualDespatchTime: { order: 7, attributeName: 'cbc:ActualDespatchTime', min: 0, max: 1, classRef: UdtTime },
  guaranteedDespatchDate: { order: 8, attributeName: 'cbc:GuaranteedDespatchDate', min: 0, max: 1, classRef: UdtDate },
  guaranteedDespatchTime: { order: 9, attributeName: 'cbc:GuaranteedDespatchTime', min: 0, max: 1, classRef: UdtTime },
  releaseID: { order: 10, attributeName: 'cbc:ReleaseID', min: 0, max: 1, classRef: UdtIdentifier },
  instructions: { order: 11, attributeName: 'cbc:Instructions', min: 0, max: undefined, classRef: UdtText },
  despatchAddress: { order: 12, attributeName: 'cac:DespatchAddress', min: 0, max: 1, classRef: DespatchAddress },
  despatchLocation: { order: 13, attributeName: 'cac:DespatchLocation', min: 0, max: 1, classRef: DespatchLocation },
  despatchParty: { order: 14, attributeName: 'cac:DespatchParty', min: 0, max: 1, classRef: DespatchParty },
  carrierParty: { order: 15, attributeName: 'cac:CarrierParty', min: 0, max: 1, classRef: CarrierParty },
  NotifyParties: { order: 16, attributeName: 'cac:NotifyParty', min: 0, max: undefined, classRef: NotifyParty },
  contact: { order: 17, attributeName: 'cac:Contact', min: 0, max: 1, classRef: Contact },
  estimatedDespatchPeriod: {
    order: 18,
    attributeName: 'cac:EstimatedDespatchPeriod',
    min: 0,
    max: 1,
    classRef: EstimatedDespatchPeriod,
  },
  requestedDespatchPeriod: {
    order: 19,
    attributeName: 'cac:RequestedDespatchPeriod',
    min: 0,
    max: 1,
    classRef: EstimatedDespatchPeriod,
  },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  requestedDespatchDate: string | UdtDate;
  requestedDespatchTime: string | UdtTime;
  estimatedDespatchDate: string | UdtDate;
  estimatedDespatchTime: string | UdtTime;
  actualDespatchDate: string | UdtDate;
  actualDespatchTime: string | UdtTime;
  guaranteedDespatchDate: string | UdtDate;
  guaranteedDespatchTime: string | UdtTime;
  releaseID: string | UdtIdentifier;
  instructions: string | UdtText;
  despatchAddress: DespatchAddress;
  despatchLocation: DespatchLocation;
  despatchParty: DespatchParty;
  carrierParty: CarrierParty;
  NotifyParties: NotifyParty;
  contact: Contact;
  estimatedDespatchPeriod: EstimatedDespatchPeriod;
  requestedDespatchPeriod: EstimatedDespatchPeriod;
};

/**
 * A class to describe the despatching of goods (their pickup for delivery).
 * More info: http://www.datypic.com/sc/ubl21/t-cac_DespatchType.html
 */
class Despatch extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:Despatch');
  }
}

export { Despatch, AllowedParams as DespatchParams };
