import GenericAggregateComponent, { ParamsMapValues, IGenericKeyValue } from './GenericAggregateComponent';

/* TODO GANERIC CLASSES */
import { UdtText } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues>  = {
    line: { order: 1, attributeName: 'cbc:Line', min: 1, max: 1, classRef: UdtText }
}

type AllowedParams = {
    /** An address line expressed as unstructured text */
    line?: string | UdtText
}

class AddressLine extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:AddressLine");
  }

  /**
   * 
   * @param {Boolean} raw as raw
   */
  getLine(raw = false){
    return raw ? this.attributes.line.content : this.attributes.line
  }

  /**
   * 
   * @param {String | UdtText} value 
   */
  setLine(value: string | UdtText){
    this.attributes.line = (value instanceof UdtText)
      ? value
      : new UdtText(value);
  }

}

export {
  AddressLine,
  AllowedParams as  AddressLineParams
}