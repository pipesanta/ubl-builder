// 'use strict'

// const { CctNumericType, CctNumericTypeAttributes } = require('./essentials/cct');

// const UdtRateAttributes = CctNumericTypeAttributes; // as alias trick
import { CctNumericType, AllowedAttributes } from './essentials/cct/CctNumericType';

export type UdtRateAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 */

export class UdtRate extends CctNumericType {
  constructor(content: string, attributes: UdtRateAttributes) {
    super(content, attributes);
  }
}
