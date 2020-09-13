import { XsdDecimal } from '../xsd';

export type AllowedAttributes = {
  /** Whether the number is an integer, decimal, real number or percentage. */
  format: string;
};
/**
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_NumericType.html
 */
export class CctNumericType extends XsdDecimal {
  constructor(content: string, attributes?: AllowedAttributes) {
    super(content, attributes);
    // this.validateAttributes(attributes);
    // Object.keys(attributes).forEach(att => this[att] = attributes[att]);
  }

  parseToJson() {
    const jsonResult: any = { '#text': this.content };
    Object.keys(this.attributes)
      .filter((att) => this.attributes[att])
      .forEach((att) => {
        jsonResult[`@${att}`] = this.attributes[att];
      });
    return jsonResult;
  }

  /**
   *
   * @param {string} value
   */
  setFormat(value: string) {
    this.attributes.format = value;
  }
}
