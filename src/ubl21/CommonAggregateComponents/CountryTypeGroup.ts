import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';

/* TODO GENERIC CLASSES */
import { UdtCode, UdtName } from '../types/UnqualifiedDataTypes'


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    identificationCode: { order: 1,  attributeName: 'cbc:IdentificationCode', min: 0, max: 1, classRef: UdtCode },
    name: { order: 2,  attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtName }
}


type AllowedParams = {
    /** A code signifying this country. */
    identificationCode?: string,
    /** The name of this country */
    name?: String | UdtName,
}

/**
 * A class to describe a country.
 */
class CountryType extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   * @param {String} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:CountryType");
  }

}

export {
  CountryType as Country,
  AllowedParams as CountryAttributes
}