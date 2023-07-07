import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtName, UdtText } from '../types/UnqualifiedDataTypes';
import { Country } from './CountryTypeGroup';

/*

0..1	cbc:StreetName	
Seller address line 1
The main address line in an address.

Example value: Main Street 1

0..1	cbc:AdditionalStreetName	
Seller address line 2
An additional address line in an address that can be used to give further details supplementing the main line.

Example value: Po Box 351

0..1	cbc:CityName	
Seller city
The common name of the city, town or village, where the Seller address is located.

Example value: London

0..1	cbc:PostalZone	
Seller post code
The identifier for an addressable group of properties according to the relevant postal service.

Example value: W1G 8LZ

0..1	cbc:CountrySubentity	
Seller country subdivision
The subdivision of a country.

Example value: Region A

0..1	cac:AddressLine	
ADDRESS LINE
1..1	cac:Country	
COUNTRY
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  streetName: { order: 1, attributeName: 'cbc:StreetName', min: 0, max: 1, classRef: UdtText },
  additionalStreetName: { order: 2, attributeName: 'cbc:AdditionalStreetName', min: 0, max: 1, classRef: UdtText },
  cityName: { order: 3, attributeName: 'cbc:CityName', min: 0, max: 1, classRef: UdtText },
  postalZone: { order: 4, attributeName: 'cbc:PostalZone', min: 0, max: 1, classRef: UdtText },
  countrySubentity: { order: 5, attributeName: 'cbc:CountrySubentity', min: 0, max: 1, classRef: UdtText },
  addressLine: { order: 6, attributeName: 'cac:AddressLine', min: 0, max: 1, classRef: UdtText },
  country: { order: 7, attributeName: 'cac:Country', min: 0, max: 1, classRef: Country },
};

type AllowedParams = {
  /* Seller address line 1. The main address line in an address. Example value: Main Street 1 */
  streetName: string | UdtText;
  /* Seller address line 2. An additional address line in an address that can be used to give further details supplementing the main line. Example value: Po Box 351 */
  AdditionalStreetName?: string | UdtText;
  /* 	Seller city. The common name of the city, town or village, where the Seller address is located. Example value: London */
  cityName: string | UdtText;
  /* Seller post code. The identifier for an addressable group of properties according to the relevant postal service. Example value: W1G 8LZ */
  postalZone: string | UdtText;
  /* Seller country subdivision. The subdivision of a country. Example value: Region A */
  countrySubentity?: string | UdtText;
  /* ADDRESS LINE */
  addressLine?: string | UdtText;
  /* COUNTRY */
  country?: Country;
};

/**
 *
 */
class PostalAddressType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:PostalAddress');
  }
}

export {
  PostalAddressType as PostalAddress,
  AllowedParams as PostalAddressTypeParams,
  /*   PostalAddressType as DeliveryContact,
  PostalAddressType as AccountingContact,
  PostalAddressType as BuyerContact,
 */
};
