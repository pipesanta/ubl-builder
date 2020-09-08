// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "./GenericAggregateComponent";
import { UdtDate, UdtTime, UdtMeasure, UdtCode, UdtText, UdtIdentifier } from "../types/UnqualifiedDataTypes";

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    startDate: { order: 1, attributeName: 'cbc:StartDate', min: 0, max: 1, classRef: UdtDate },
    startTime: { order: 2, attributeName: 'cbc:StartTime', min: 0, max: 1, classRef: UdtTime },
    endDate: { order: 3, attributeName: 'cbc:EndDate', min: 0, max: 1, classRef: UdtDate },
    endTime: { order: 4, attributeName: 'cbc:EndTime', min: 0, max: 1, classRef: UdtTime },
    durationMeasure: { order: 5, attributeName: 'cbc:DurationMeasure', min: 0, max: 1, classRef: UdtMeasure },
    descriptionCode: { order: 6, attributeName: 'cbc:DescriptionCode', min: 0, max: undefined, classRef: UdtCode  },
    description: { order: 7, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UdtText },
}

type AllowedParams = {
    /** The date on which this period begins.*/
    startDate?: string | UdtDate,
    /** The time at which this period begins */
    startTime?: string | UdtTime,
    /** The date on which this period ends*/
    endDate?: string | UdtDate,
    /** The time at which this period ends*/
    endTime?: string | UdtTime,
    /** The duration of this period, expressed as an ISO 8601 code. */
    durationMeasure?: string | UdtMeasure ,
    /** A description of this period, expressed as a code. */
    descriptionCode?: string | UdtCode,
    /** A description of this period, expressed as text.*/
    description? : string | UdtText
}


class PeriodType extends GenericAggregateComponent {
  
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:InvoicePeriod");
  }


}


class InvoicePeriodBasic extends PeriodType {
  
   constructor(startDate: string | UdtDate, endDate: string | UdtDate) {
     super({ startDate, endDate });
 
   }
 
 }
export {
  PeriodType,
  AllowedParams as PeriodTypeParams,
  InvoicePeriodBasic,
  PeriodType as RequestedDeliveryPeriod,
  PeriodType as PromisedDeliveryPeriod,
  PeriodType as EstimatedDeliveryPeriod,
  PeriodType as EstimatedDespatchPeriod,
  PeriodType as RequestedDespatchPeriod,
  PeriodType as ValidityPeriod


}

