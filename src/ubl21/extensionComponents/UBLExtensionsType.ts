import { UBLExtensionType, UBLExtensionTypeParams } from "./UBLExtension";
import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "../CommonAggregateComponents/GenericAggregateComponent";


/*
    1 ext:UBLExtension [0..*] A single extension for private use.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  UBLExtensions: { order: 1,  attributeName: 'ext:UBLExtension', min: 0, max: undefined, classRef: UBLExtensionType }

}

type AllowedParams = {
  /**@type {} A single extension for private use. */
  UBLExtensions: UBLExtensionType
}

/**
 * 
 */
class UBLExtension extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {String} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:UBLExtension");
    this.attributes.UBLExtensions = [];
  }

  /**
   * @returns UBLExtensionType
   */
  getDianUblExtension(){
    if(this.attributes.UBLExtensions.length > 0){
      const dianExtension = this.attributes.UBLExtensions[0];
      return dianExtension;
    }else {
      return null;
    }

  }

  
  addUBLExtension(value: UBLExtensionType | UBLExtensionTypeParams){
    const itemToPush = ( value instanceof UBLExtensionType )
      ? value
      : new UBLExtensionType(value);
    this.attributes.UBLExtensions.push(itemToPush);
  }

}

export {
  UBLExtension as UBLExtensions,
  AllowedParams as UBLExtensionsParams,   
}
