import GenericAggregateComponent, { ParamsMapValues, IGenericKeyValue } from './GenericAggregateComponent';

import { UdtText } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  line: { order: 1, attributeName: 'cbc:Line', min: 1, max: 1, classRef: UdtText },
};

type AllowedParams = {
  /** An address line expressed as unstructured text */
  line: string | UdtText;
};

/**
 * cac:AddressLine
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2
 * Type: cac:AddressLineType
 * See more: http://www.datypic.com/sc/ubl21/e-cac_AddressLine.html
 */
class AddressLine extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:AddressLine');
    if (!this.attributes.line) {
      throw new Error('line is required');
    }
  }

  /**
   *
   * @param {boolean} raw as raw
   */
  getLine(raw = false) {
    if (!this.attributes.line) return null;
    return raw ? this.attributes.line.content : this.attributes.line;
  }

  /**
   *
   * @param {string | UdtText} value
   */
  setLine(value: string | UdtText) {
    if (value === undefined || value === null) throw new Error('line is required');
    this.attributes.line = value instanceof UdtText ? value : new UdtText(value);
    return this;
  }
}

export { AddressLine, AllowedParams as AddressLineParams };
