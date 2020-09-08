import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "./GenericAggregateComponent";
import { UdtIdentifier, UdtName, UdtCode } from "../types/UnqualifiedDataTypes";
import { JurisdictionRegionAddress } from "./AddressTypeGroup";

/*
    1  cbc:ID [0..1]    An identifier for this registration scheme.
    2  cbc:Name [0..1]    The name of this registration scheme.
    3  cbc:CorporateRegistrationTypeCode [0..1]    A code signifying the type of this registration scheme.
    4  cac:JurisdictionRegionAddress [0..*]    A geographic area in which this registration scheme applies.
*/


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    id: { order: 1,  attributeName: 'cbc:ID', min: 0, max:1, classRef: UdtIdentifier },
    name: { order: 2,  attributeName: 'cbc:Name', min: 0, max:1, classRef: UdtName },
    corporateRegistrationTypeCode: { order: 3,  attributeName: 'cbc:CorporateRegistrationTypeCode', min: 0, max:1, classRef: UdtCode },
    jurisdictionRegionAddresses: { order: 4,  attributeName: 'cac:JurisdictionRegionAddress', min: 0, max: undefined, classRef: JurisdictionRegionAddress },

    //##################################  TODO CAC MISSING ################################################

    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //
  
    //##################################  TODO CAC MISSING ################################################

}


type AllowedParams = {
    id: string | UdtIdentifier,
    name: string | UdtName,
    corporateRegistrationTypeCode : string | UdtCode,
    jurisdictionRegionAddresses: JurisdictionRegionAddress
}

/**
 * 
 */
class CorporateRegistrationScheme extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:CorporateRegistrationScheme");
  }

  /**
   * 
   * @param value 
   */
  addJurisdictionRegionAddress(value: JurisdictionRegionAddress){
    if(!this.attributes.jurisdictionRegionAddresses){
      this.attributes.jurisdictionRegionAddresses = [];
    }
    if(value instanceof JurisdictionRegionAddress){
      this.attributes.jurisdictionRegionAddresses.push(value)
    }else{
      throw "value must to be instance of JurisdictionRegionAddress"
    }

  }

}

export {
  CorporateRegistrationScheme as CorporateRegistrationScheme,
  AllowedParams as CorporateRegistrationSchemeParams,   
}
