'use strict';

// const  = require('./XsdAnySimpleType');
import XsdAnySimpleType from './XsdAnySimpleType';

const VALID_VALUES = [true, false, 1, 0, 'true', 'false'];

/**
 * xsd:boolean
 * The type xsd:boolean represents logical yes/no values.
 * The valid values for xsd:boolean are true, false, 0, and 1.
 * Values that are capitalized (e.g. TRUE) or abbreviated (e.g. T) are not valid.
 * More info http://www.datypic.com/sc/xsd/t-xsd_boolean.html
 */
export class XsdBoolean extends XsdAnySimpleType {
  constructor(content: string | boolean, attributtes?: any) {
    super(content, attributtes);
    this.validateContent();
  }

  validateContent() {
    if (!VALID_VALUES.includes(this.content)) {
      throw new Error("XsdBoolean content is not allowed. the allowed values are [true, false, 1, 0, 'true', 'false']");
    }
  }
}
