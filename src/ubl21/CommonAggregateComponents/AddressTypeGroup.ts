import GenericAggregateComponent, { ParamsMapValues, IGenericKeyValue } from './GenericAggregateComponent';

import { 
  UdtCode, UdtCodeAttributes,
  UdtIdentifier, UdtIdentifierAttributes,
  UdtDate, UdtText, UdtTextAttributes, UdtTime, UdtName
 } from '../types/UnqualifiedDataTypes';

/* TODO GENERIC CLASSES */
import { AddressLine } from './AddressLine';
import { Country } from './CountryTypeGroup';

/*

    1.  cbc:ID [0..1]    An identifier for this address within an agreed scheme of address identifiers.
    2.  cbc:AddressTypeCode [0..1]    A mutually agreed code signifying the type of this address.
    3.  cbc:AddressFormatCode [0..1]    A mutually agreed code signifying the format of this address.
    4  cbc:Postbox [0..1]    A post office box number registered for postal delivery by a postal service provider.
    5  cbc:Floor [0..1]    An identifiable floor of a building.
    6  cbc:Room [0..1]    An identifiable room, suite, or apartment of a building.
    7  cbc:StreetName [0..1]    The name of the street, road, avenue, way, etc. to which the number of the building is attached.
    8  cbc:AdditionalStreetName [0..1]    An additional street name used to further clarify the address.
    9  cbc:BlockName [0..1]    The name of the block (an area surrounded by streets and usually containing several buildings) in which this address is located.
    10  cbc:BuildingName [0..1]    The name of a building.
    11  cbc:BuildingNumber [0..1]    The number of a building within the street.
    12  cbc:InhouseMail [0..1]    The specific identifable location within a building where mail is delivered.
    13  cbc:Department [0..1]    The department of the addressee.
    14  cbc:MarkAttention [0..1]    The name, expressed as text, of a person or department in an organization to whose attention incoming mail is directed; corresponds to the printed forms "for the attention of", "FAO", and ATTN:".
    15  cbc:MarkCare [0..1]    The name, expressed as text, of a person or organization at this address into whose care incoming mail is entrusted; corresponds to the printed forms "care of" and "c/o".
    16  cbc:PlotIdentification [0..1]    An identifier (e.g., a parcel number) for the piece of land associated with this address.
    17  cbc:CitySubdivisionName [0..1]    The name of the subdivision of a city, town, or village in which this address is located, such as the name of its district or borough.
    18  cbc:CityName [0..1]    The name of a city, town, or village.
    19  cbc:PostalZone [0..1]    The postal identifier for this address according to the relevant national postal service, such as a ZIP code or Post Code.
    20  cbc:CountrySubentity [0..1]    The political or administrative division of a country in which this address is located, such as the name of its county, province, or state, expressed as text.
    21  cbc:CountrySubentityCode [0..1]    The political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed).
    22  cbc:Region [0..1]    The recognized geographic or economic region or group of countries in which this address is located.
    23  cbc:District [0..1]    The district or geographical division of a country or region in which this address is located.
    24  cbc:TimezoneOffset [0..1]    The time zone in which this address is located (as an offset from Universal Coordinated Time (UTC)) at the time of exchange.
    25  cac:AddressLine [0..*]    An unstructured address line.
    26  cac:Country [0..1]    The country in which this address is situated.
    27  cac:LocationCoordinate [0..*]    The geographical coordinates of this address.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    id:                   { order: 1,   attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
    cityName:             { order: 18,  attributeName: 'cbc:CityName', min: 0, max: 1, classRef: UdtName },
    countrySubentity:     { order: 20,  attributeName: 'cbc:CountrySubentity', min: 0, max: 1, classRef: UdtText },
    countrySubentityCode: { order: 21,  attributeName: 'cbc:CountrySubentityCode', min: 0, max: 1, classRef: UdtCode },
    addressLines:         { order: 25,  attributeName: 'cac:AddressLine', min: 0, max: undefined, classRef: AddressLine },
    // country:              { order: 26,  attributeName: 'cac:Country', min: 0, max: 1, classRef: Country },
    //##################################  TODO CAC MISSING ################################################

    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //
  
    //##################################  TODO CAC MISSING ################################################

}


type AllowedParams = {
    /** An identifier for this address within an agreed scheme of address identifiers */
    id?: string | UdtIdentifier,
    /** The name of a city, town, or village */
    cityName?: string | UdtName,
    /** The political or administrative division of a country in which this address is located, such as the name of its county, province, or state, expressed as text */
    countrySubentity?: string | UdtText,
    /** The political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed)*/
    countrySubentityCode?: string | UdtText,
    /** An unstructured address line */
    addressLines?: AddressLine[],
    /**  The country in which this address is situated*/
    country?: Country
    //##################################  TODO CAC MISSING ################################################
    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }
}

export class AddressType extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {String} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:AddressType");
  }

  addAddressLine(value: string | AddressLine){
    if(!this.attributes.addressLines){
      this.attributes.addressLines = [];
    }
    const itemToPush = ( value instanceof AddressLine )
      ? value
      : new AddressLine({ line: value });
    this.attributes.addressLines.push(itemToPush);
  }

  setCountry(value: string | Country ){
    if(value instanceof Country){
      this.attributes.country = value
    } else if (typeof value === "string") {
      this.attributes.country = new Country({ name: value })
    }else{
      this.attributes.country = new Country(value);
    }
  }

  /**
   * 
   * @param value
   * @param attributes 
   */
  setId(value: string | UdtIdentifier, attributes: UdtIdentifierAttributes){
    this.attributes.id = (value instanceof UdtIdentifier)
      ? value
      : new UdtIdentifier(value, attributes)
  }



}



// todo missing exports 
/*

Element cac:ApplicableAddress
Element cac:ApplicableTerritoryAddress
Element cac:DeliveryAddress
Element cac:DespatchAddress
Element cac:JurisdictionRegionAddress
Element cac:LocationAddress
Element cac:OriginAddress
Element cac:PostalAddress
Element cac:RegistrationAddress
Element cac:ResidenceAddress
Element cac:ReturnAddress

*/
export {
  AddressType as Address,
  AddressType as AddressParams,
  AddressType as RegistrationAddress,
  AddressType as JurisdictionRegionAddress,
  AddressType as DeliveryAddress,
  AddressType as DespatchAddress
}
