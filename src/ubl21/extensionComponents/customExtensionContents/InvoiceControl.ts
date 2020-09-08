// 'use strict'

import GenericAggregateComponent from "../../CommonAggregateComponents/GenericAggregateComponent";
import { UdtText } from "../../types/UnqualifiedDataTypes";
import { PeriodType } from "../../CommonAggregateComponents";
import { AuthorizedInvoices } from "./AuthorizedInvoices";



const ParamsMap = {
  //##################################  TODO CAC MISSING ################################################
  invoiceAuthorization: { order: 1,  attributeName: 'sts:InvoiceAuthorization', min: 0, max: 1, classRef: UdtText },
  authorizationPeriod: { order: 2,  attributeName: 'sts:AuthorizationPeriod', min: 0, max: 1, classRef: PeriodType },
  authorizedInvoices: { order: 3,  attributeName: 'sts:AuthorizedInvoices', min: 0, max: 1, classRef: AuthorizedInvoices }
}


type AllowedParams = {
  invoiceAuthorization: string | UdtText,
  authorizationPeriod: string | PeriodType,
  authorizedInvoices: AuthorizedInvoices,
}

/**
 * Body of Dian extension content
 */
class InvoiceControl extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {String} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "sts:InvoiceControl");
  }

}




export {
  InvoiceControl as InvoiceControl,
  AllowedParams as InvoiceControlParams,   
}
