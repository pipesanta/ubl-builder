import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "./GenericAggregateComponent";
import { UdtIdentifier, UdtCode } from "../types/UnqualifiedDataTypes";
import { ValidityPeriod } from "./ValidityPeriod";

/*
    http://www.datypic.com/sc/ubl21/t-cac_PriceListType.html
  1  cbc:ID [0..1]    An identifier for this price list.
  2  cbc:StatusCode [0..1]    A code signifying whether this price list is an original, copy, revision, or cancellation.
  3  cac:ValidityPeriod [0..*]    A period during which this price list is valid.
  4  cac:PreviousPriceList [0..1]    The previous price list.
*/


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  statusCode: { order: 2, attributeName: 'cbc:StatusCode', min: 0, max: 1, classRef: UdtCode },
  validityPeriods: { order: 3, attributeName: 'cac:ValidityPeriod', min: 0, max: 1, classRef: ValidityPeriod },
  // id: { order: 1,  attributeName: 'cbc:ID', min: 0, max:1, classRef: UdtIdentifier },

  //##################################  TODO CAC MISSING ################################################

}


type AllowedParams = {
  id: string | UdtIdentifier,
  statusCode: string | UdtCode,
  validityPeriods: ValidityPeriod,
}

/**
 * 
 */
class PriceList extends GenericAggregateComponent {

  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:PriceList");
  }

}

export {
  PriceList as PriceList,
  AllowedParams as PriceListParams,
}
