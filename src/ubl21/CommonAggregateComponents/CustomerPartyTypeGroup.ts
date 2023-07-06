import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
import { Party } from './PartyTypeGroup';
import { DeliveryContact, AccountingContact, BuyerContact } from './ContactTypeGroup';

/*

  1  cbc:CustomerAssignedAccountID [0..1]    An identifier for the customer's account, assigned by the customer itself.
  2  cbc:SupplierAssignedAccountID [0..1]    An identifier for the customer's account, assigned by the supplier.
  3  cbc:AdditionalAccountID [0..*]    An identifier for the customer's account, assigned by a third party.
  4  cac:Party [0..1]    The customer party itself.
  5  cac:DeliveryContact [0..1]    A customer contact for deliveries.
  6  cac:AccountingContact [0..1]    A customer contact for accounting.
  7  cac:BuyerContact [0..1]    A customer contact for purchasing.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  customerAssignedAccountID: {
    order: 1,
    attributeName: 'cbc:CustomerAssignedAccountID',
    min: 0,
    max: 1,
    classRef: UdtIdentifier,
  },
  SupplierAssignedAccountID: {
    order: 2,
    attributeName: 'cbc:SupplierAssignedAccountID',
    min: 0,
    max: 1,
    classRef: UdtIdentifier,
  },
  additionalAccountIDs: {
    order: 3,
    attributeName: 'cbc:AdditionalAccountID',
    min: 0,
    max: undefined,
    classRef: UdtIdentifier,
  },
  party: { order: 4, attributeName: 'cac:Party', min: 0, max: 1, classRef: Party },
  deliveryContact: { order: 5, attributeName: 'cac:DeliveryContact', min: 0, max: 1, classRef: DeliveryContact },
  accountingContact: { order: 6, attributeName: 'cac:AccountingContact', min: 0, max: 1, classRef: AccountingContact },
  buyerContact: { order: 7, attributeName: 'cac:BuyerContact', min: 0, max: 1, classRef: BuyerContact },
};

type AllowedParams = {
  customerAssignedAccountID?: string | UdtIdentifier;
  SupplierAssignedAccountID?: string | UdtIdentifier;
  additionalAccountIDs?: string[] | UdtIdentifier[];
  party: Party;
  deliveryContact?: DeliveryContact;
  accountingContact?: AccountingContact;
  buyerContact?: BuyerContact;
};

/**
 *
 */
class CustomerParty extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:CustomerParty');
  }

  /**
   * @returns {Party} The supplier party itself Information
   */
  getParty() {
    return this.attributes.party;
  }
}

export { CustomerParty as AccountingCustomerParty, AllowedParams as CustomerPartyParams };
