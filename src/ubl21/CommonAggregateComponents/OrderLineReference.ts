import GenericAggregateComponent from "./GenericAggregateComponent";
import { UdtIdentifier } from "../types/UnqualifiedDataTypes";
import { OrderReference } from "./OrderReference";


// const GenericAggregateComponent = require("./GenericAggregateComponent");

// /* TODO GANERIC CLASSES */

// const { UdtCode, UdtIdentifier, UdtDate, UdtText, UdtTime, UdtName, UdtQuantity } = require("../types/UnqualifiedDataTypes");
// const { OrderReference } = require("./OrderReference");

/* TODO GANERIC CLASSES */

/*

  http://www.datypic.com/sc/ubl21/e-cac_OrderLineReference.html
  1  cbc:LineID [1..1]    An identifier for the referenced order line, assigned by the buyer.
  2  cbc:SalesOrderLineID [0..1]    An identifier for the referenced order line, assigned by the seller.
  3  cbc:UUID [0..1]    A universally unique identifier for this order line reference.
  4  cbc:LineStatusCode [0..1]    A code signifying the status of the referenced order line with respect to its original state.
  5  cac:OrderReference [0..1]    A reference to the Order containing the referenced order line.

*/

const ParamsMap = {
    lineID: { order: 1,  attributeName: 'cbc:LineID', min: 0, max:1, classRef: UdtIdentifier },
    salesOrderLineID: { order: 2,  attributeName: 'cbc:SalesOrderLineID', min: 0, max: 1, classRef: UdtIdentifier },
    uuid: { order: 3,  attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
    lineStatusCode: { order: 4,  attributeName: 'cbc:LineStatusCode', min: 0, max: 1, classRef: UdtIdentifier },
    orderReference: { order: 5,  attributeName: 'cac:OrderReference', min: 0, max: 1, classRef: OrderReference }
}


type AllowedParams = {
  lineID: string | UdtIdentifier,
  salesOrderLineID: string | UdtIdentifier,
  uuid: string | UdtIdentifier,
  lineStatusCode: string | UdtIdentifier,
  orderReference: OrderReference,
}

/**
 * 
 */
class OrderLineReference extends GenericAggregateComponent {
  constructor(content: AllowedParams ) {
    super(content, ParamsMap, "cac:OrderLineReference");
  }

}

export {
   OrderLineReference as  OrderLineReference,
   AllowedParams as OrderLineReferenceParams,   
}
