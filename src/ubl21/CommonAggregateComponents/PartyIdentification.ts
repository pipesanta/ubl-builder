import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
};

type AllowedParams = {
  /** An identifier for the party */
  id: string | UdtIdentifier;
};

class PartyIdentification extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PartyIdentification');
  }
}

export { PartyIdentification, AllowedParams as PartyIdentificationParams };
