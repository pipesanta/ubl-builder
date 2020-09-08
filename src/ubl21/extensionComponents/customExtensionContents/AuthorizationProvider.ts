import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "../../CommonAggregateComponents/GenericAggregateComponent";
import { UdtIdentifier } from "../../types/UnqualifiedDataTypes/UdtIdentifier";


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  authorizationProviderID: { order: 1,  attributeName: 'sts:AuthorizationProviderID', min: 0, max: 1, classRef: UdtIdentifier }
}


type AllowedParams = {
  authorizationProviderID: string | UdtIdentifier
}

/**
 * Body of Dian extension content
 */
class AuthorizationProvider extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {String} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "sts:AuthorizationProvider");
  }

}




export {
  AuthorizationProvider as AuthorizationProvider,
  AllowedParams as AuthorizationProviderParams,   
}
