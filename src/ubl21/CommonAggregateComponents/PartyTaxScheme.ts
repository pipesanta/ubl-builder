// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtName, UdtIdentifier, UdtCode, UdtText } from '../types/UnqualifiedDataTypes';
import { RegistrationAddress } from './AddressTypeGroup';
import { TaxScheme } from './TaxScheme';

// const GenericAggregateComponent = require("./GenericAggregateComponent");

// /* TODO GANERIC CLASSES */

// const { UdtCode, UdtIdentifier, UdtDate, UdtText, UdtTime, UdtName } = require("../types/UnqualifiedDataTypes");

// const { RegistrationAddress } = require("./AddressTypeGroup");
// const { TaxScheme, TaxSchemeParams } = require("./TaxScheme");
/* TODO GANERIC CLASSES */

/*
  http://www.datypic.com/sc/ubl21/t-cac_PartyTaxSchemeType.html
  1. cbc:RegistrationName [0..1]    The name of the party as registered with the relevant fiscal authority.
  2. cbc:CompanyID [0..1]    An identifier for the party assigned for tax purposes by the taxation authority.
  3. cbc:TaxLevelCode [0..1]    A code signifying the tax level applicable to the party within this taxation scheme.
  4. cbc:ExemptionReasonCode [0..1]    A reason for the party's exemption from tax, expressed as a code.
  5. cbc:ExemptionReason [0..*]    A reason for the party's exemption from tax, expressed as text.
  6. cac:RegistrationAddress [0..1]    The address of the party as registered for tax purposes.
  7. cac:TaxScheme [1..1]    The taxation scheme applicable to the party.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  registrationName: { order: 1, attributeName: 'cbc:RegistrationName', min: 0, max: 1, classRef: UdtName },
  companyID: { order: 2, attributeName: 'cbc:CompanyID', min: 0, max: 1, classRef: UdtIdentifier },
  taxLevelCode: { order: 3, attributeName: 'cbc:TaxLevelCode', min: 0, max: 1, classRef: UdtCode },
  exemptionReasonCode: { order: 4, attributeName: 'cbc:ExemptionReasonCode', min: 0, max: 1, classRef: UdtCode },
  exemptionReason: { order: 5, attributeName: 'cbc:ExemptionReason', min: 0, max: undefined, classRef: UdtText },
  registrationAddress: {
    order: 6,
    attributeName: 'cac:RegistrationAddress',
    min: 0,
    max: 1,
    classRef: RegistrationAddress,
  },
  taxScheme: { order: 7, attributeName: 'cac:TaxScheme', min: 1, max: 1, classRef: TaxScheme },
};

type AllowedParams = {
  registrationName: string | UdtName;
  companyID: string | UdtIdentifier;
  taxLevelCode: string | UdtCode;
  exemptionReasonCode: string | UdtCode;
  exemptionReason: string;
  registrationAddress: RegistrationAddress;
  taxScheme: TaxScheme;
};

/**
 * A class to describe a taxation scheme applying to a party.
 * More info http://www.datypic.com/sc/ubl21/t-cac_PartyTaxSchemeType.html
 */
class PartyTaxScheme extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PartyTaxScheme');
  }

  /**
   *
   * @param {boolean} [raw=true] raw value
   */
  getCompanyID(raw = true) {
    return raw ? this.attributes.companyID.content : this.attributes.companyID;
  }
}

export { PartyTaxScheme, AllowedParams as PartyTaxSchemeParams };
