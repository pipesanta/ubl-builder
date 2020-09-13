import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtText, UdtCode, UdtName } from '../types/UnqualifiedDataTypes';
import { ValidityPeriod } from './ValidityPeriod';
import { Address } from './AddressTypeGroup';

/*http://www.datypic.com/sc/ubl21/e-cac_PhysicalLocation.html
cbc:ID [0..1]    An identifier for this location, e.g., the EAN Location Number, GLN.
cbc:Description [0..*]    Text describing this location.
cbc:Conditions [0..*]    Free-form text describing the physical conditions of the location.
cbc:CountrySubentity [0..1]    A territorial division of a country, such as a county or state, expressed as text.
cbc:CountrySubentityCode [0..1]    A territorial division of a country, such as a county or state, expressed as a code.
cbc:LocationTypeCode [0..1]    A code signifying the type of location.
cbc:InformationURI [0..1]    The Uniform Resource Identifier (URI) of a document providing information about this location.
cbc:Name [0..1]    The name of this location.
cac:ValidityPeriod [0..*]    A period during which this location can be used (e.g., for delivery).
cac:Address [0..1]    The address of this location.
cac:SubsidiaryLocation [0..*]    A location subsidiary to this location.
cac:LocationCoordinate [0..*]    The geographical coordinates of this location.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  description: { order: 2, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UdtText },
  conditions: { order: 3, attributeName: 'cbc:Conditions', min: 0, max: undefined, classRef: UdtText },
  countrySubentity: { order: 4, attributeName: 'cbc:CountrySubentity', min: 0, max: 1, classRef: UdtText },
  countrySubentityCode: { order: 5, attributeName: 'cbc:CountrySubentityCode', min: 0, max: 1, classRef: UdtCode },
  locationTypeCode: { order: 6, attributeName: 'cbc:LocationTypeCode', min: 0, max: 1, classRef: UdtCode },
  informationURI: { order: 7, attributeName: 'cbc:InformationURI', min: 0, max: 1, classRef: UdtIdentifier },
  name: { order: 8, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtName },
  validityPeriod: { order: 9, attributeName: 'cac:ValidityPeriod', min: 0, max: undefined, classRef: ValidityPeriod },
  address: { order: 10, attributeName: 'cac:Address', min: 0, max: 1, classRef: Address },

  // ##################################  TODO CAC MISSING ################################################

  // markCareIndicator: { order: 11,  attributeName: 'cbc:MarkCareIndicator', min: 0, max:1, classRef: null  },
  // markCareIndicator: { order: 12,  attributeName: 'cbc:MarkCareIndicator', min: 0, max:1, classRef: null }

  // ##################################  TODO CAC MISSING ################################################
};

type AllowedParams = {
  id: string | UdtIdentifier;
  description: string | UdtText;
  conditions: string | UdtText;
  countrySubentity: string | UdtText;
  countrySubentityCode: string | UdtCode;
  locationTypeCode: string | UdtCode;
  informationURI: string | UdtIdentifier;
  name: string | UdtName;
  validityPeriod: string | ValidityPeriod;
  address: string | Address;
};

/**
 *
 */
class LocationType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:LocationType');
  }

  /**
   *
   * @param value
   */
  setAddress(value: Address) {
    if (!(value instanceof Address)) throw new Error('Value must be instance of Address');
    this.attributes.address = value;
  }
}

export {
  LocationType as PhysicalLocation,
  AllowedParams as LocationTypeParams,
  LocationType as DeliveryLocation,
  LocationType as AlternativeDeliveryLocation,
  LocationType as DespatchLocation,
};
