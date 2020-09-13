import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtName } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  name: { order: 1, attributeName: 'cbc:Name', min: 1, max: 1, classRef: UdtName },
};

type AllowedParams = {
  /** The name of the party */
  name: UdtName | string;
};

class PartyName extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PartyName');
  }
}

export { PartyName, AllowedParams as PartyNameParams };
