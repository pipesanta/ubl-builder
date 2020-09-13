import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier, UdtText, UdtDate, UdtTime } from '../types/UnqualifiedDataTypes';

const ParamsMap = {
  name: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  notes: { order: 2, attributeName: 'cbc:Note ', min: 1, max: undefined, classRef: UdtText },
  validationDate: { order: 3, attributeName: 'cbc:ValidationDate', min: 1, max: 1, classRef: UdtDate },
  validationTime: { order: 4, attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UdtTime },
  validatorID: { order: 5, attributeName: 'cbc:ValidatorID', min: 1, max: 1, classRef: UdtIdentifier },
  canonicalizationMethod: { order: 6, attributeName: 'cbc:CanonicalizationMethod', min: 1, max: 1, classRef: UdtText },
  //                                   TODO CAC MISSING
  // signatureMethod: { order: 7,  attributeName: 'cbc:SignatureMethod', min: 1, max: 1, classRef: UdtText },
  // signatoryParty: { order: 8,  attributeName: 'cac:SignatoryParty', min: 1, max: 1, classRef: UdtTime },
  // validationTime: { order: 9,  attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UdtTime },
  // validationTime: { order: 10,  attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UdtTime },
  //                                   TODO CAC MISSING
};

type AllowedParams = {
  /** An identifier for this signature. */
  name: string | UdtIdentifier;
  notes: string[] | UdtText[];
  validationDate: string | UdtDate;
  validationTime: string | UdtTime;
  validatorID: string | UdtIdentifier;
  canonicalizationMethod: string | UdtText;
};

class Signature extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:Signature');
  }
}

export { Signature, AllowedParams as SignatureParams };
