import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtName, UdtText } from '../types/UnqualifiedDataTypes';

/*

  1    cbc:ID [0..1]    An identifier for this contact.
  2    cbc:Name [0..1]    The name of this contact. It is recommended that this be used for a functional name and not a personal name.
  3    cbc:Telephone [0..1]    The primary telephone number of this contact.
  4    cbc:Telefax [0..1]    The primary fax number of this contact.
  5    cbc:ElectronicMail [0..1]    The primary email address of this contact.
  6    cbc:Note [0..*]    Free-form text conveying information that is not contained explicitly in other structures; in particular, a textual description of the circumstances under which this contact can be used (e.g., "emergency" or "after hours").
  7    cac:OtherCommunication [0..*]    Another means of communication with this contact.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtName },
  telephone: { order: 3, attributeName: 'cbc:Telephone', min: 0, max: 1, classRef: UdtText },
  telefax: { order: 4, attributeName: 'cbc:Telefax', min: 0, max: 1, classRef: UdtText },
  electronicMail: { order: 5, attributeName: 'cbc:ElectronicMail', min: 0, max: 1, classRef: UdtText },
  note: { order: 6, attributeName: 'cbc:Note', min: 0, max: undefined, classRef: UdtText },
  // otherCommunication: { order: 7,  attributeName: 'cac:OtherCommunication', min: 0, max: undefined, classRef: UdtIdentifier },
  // ##################################  TODO CAC MISSING ################################################
};

type AllowedParams = {
  /** An identifier for this contact */
  id?: string | UdtIdentifier;
  /** The name of this contact. It is recommended that this be used for a functional name and not a personal name */
  name?: string | UdtName;
  /** The primary telephone number of this contact */
  telephone: string | UdtText;
  /** The primary fax number of this contact */
  telefax?: string | UdtText;
  /** The primary email address of this contact */
  electronicMail: string | UdtText;
  /** Free-form text conveying information that is not contained explicitly in other structures; in particular, a textual description of the circumstances under which this contact can be used (e.g., "emergency" or "after hours") */
  note?: string | UdtText;
};

/**
 *
 */
class ContactType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ContactType');
  }
}

export {
  ContactType as Contact,
  AllowedParams as ContactTypeParams,
  ContactType as DeliveryContact,
  ContactType as AccountingContact,
  ContactType as BuyerContact,
};
