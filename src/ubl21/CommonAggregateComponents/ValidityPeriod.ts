// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtDate, UdtTime, UdtCode, UdtText, UdtMeasure } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  startDate: { order: 1, attributeName: 'cbc:StartDate', min: 0, max: 1, classRef: UdtDate },
  startTime: { order: 2, attributeName: 'cbc:StartTime', min: 0, max: 1, classRef: UdtTime },
  endDate: { order: 3, attributeName: 'cbc:EndDate', min: 0, max: 1, classRef: UdtDate },
  endTime: { order: 4, attributeName: 'cbc:EndTime', min: 0, max: 1, classRef: UdtTime },
  durationMeasure: { order: 5, attributeName: 'cbc:DurationMeasure', min: 0, max: 1, classRef: UdtMeasure },
  descriptionCode: { order: 6, attributeName: 'cbc:DescriptionCode', min: 0, max: 1, classRef: UdtCode },
  description: { order: 7, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UdtText },
};

type AllowedParams = {
  /** The date on which this period begins */
  startDate: UdtDate | string;

  /* The time at which this period begins */
  startTime: UdtTime | string;

  /** The date on which this period ends */
  endDate: UdtDate | string;

  /**  The time at which this period ends */
  endTime: UdtTime | string;

  /**  The duration of this period, expressed as an ISO 8601 code */
  durationMeasure: UdtMeasure | string;

  /** A description of this period, expressed as a code */
  descriptionCode: string;

  /** A description of this period, expressed as text */
  description: UdtText | string;
};

class ValidityPeriod extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ValidityPeriod');
  }
}

export { ValidityPeriod, AllowedParams as ValidityPeriodParams };
