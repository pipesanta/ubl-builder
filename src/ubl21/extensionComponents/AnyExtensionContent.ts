import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "../CommonAggregateComponents/GenericAggregateComponent";

/**
 * Any element [1..1] Namespace: ##other, Process Contents: lax
 */
export  default class AnyExtensionContent extends GenericAggregateComponent {
  /**
   * @param {any} content
   * @param {String} name
   */
  constructor(content: any, ParamsMap: IGenericKeyValue<ParamsMapValues>, extensionName: string) {
    super(content, ParamsMap, extensionName);
  }

}