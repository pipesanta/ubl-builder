import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "./GenericAggregateComponent";
import { UdtIdentifier, UdtText } from "../types/UnqualifiedDataTypes";
import { Party, PartyParams } from "./PartyTypeGroup";

/*
    cbc:CustomerAssignedAccountID [0..1]    An identifier for this supplier party, assigned by the customer.
    cbc:AdditionalAccountID [0..*]    An additional identifier for this supplier party.
    cbc:DataSendingCapability [0..1]    Text describing the supplier's ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard, American Express).
    cac:Party [0..1]    The supplier party itself.
    cac:DespatchContact [0..1]    A contact at this supplier party for despatches (pickups).
    cac:AccountingContact [0..1]    A contact at this supplier party for accounting.
    cac:SellerContact [0..1]    The primary contact for this supplier party.
 */

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    customerAssignedAccountID: { order: 1, attributeName: 'cbc:CustomerAssignedAccountID', min: 0, max: 1, classRef: UdtIdentifier },
    additionalAccountIDs: { order: 2, attributeName: 'cbc:AdditionalAccountID', min: 0, max: undefined, classRef: UdtIdentifier },
    dataSendingCapability: { order: 3, attributeName: 'cbc:DataSendingCapability', min: 0, max: 1, classRef: UdtText },
    party: { order: 4, attributeName: 'cac:Party', min: 0, max: 1, classRef: Party },

    //##################################  TODO CAC MISSING ################################################

    // despatchContact: { order: 5, attributeName: 'cac:DespatchContact', min: 0, max: 1, classRef: UdtText },
    // accountingContact: { order: 6, attributeName: 'cac:AccountingContact', min: 0, max: 1, classRef: UdtText },
    // sellerContact: { order: 7, attributeName: 'cac:SellerContact', min: 0, max: 1, classRef: UdtText },

    //##################################  TODO CAC MISSING ################################################
}

type AllowedParams = {
    /** An identifier for this supplier party, assigned by the custom */
    customerAssignedAccountID: string | UdtIdentifier,
    /** An additional identifier for this supplier party. */
    additionalAccountIDs: string | UdtIdentifier,
    /** Text describing the supplier's ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard, American Express). */
    dataSendingCapability: string | UdtText,
    /** The supplier party itself. */
    party: Party,

}

class AccountingSupplierParty extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:AccountingSupplierParty");
  }

  setParty(value: Party | PartyParams){
    this.attributes.party = ( value instanceof Party)
      ? value
      : new Party(value);
  }

  /**
   * @returns {Party} The supplier party itself Information
   */
  getParty(){
    return this.attributes.party;
  }

  addAdditionalAccountID(value: string | UdtIdentifier){
    if(!this.attributes.additionalAccountIDs){
      this.attributes.additionalAccountIDs = [];
    }
    const itemToPush = ( value instanceof UdtIdentifier )
      ? value
      : new UdtIdentifier(value);

    this.attributes.additionalAccountIDs.push(itemToPush);
  }

}

export {
   AccountingSupplierParty,
   AllowedParams as SupplierPartyTypeParams
}
