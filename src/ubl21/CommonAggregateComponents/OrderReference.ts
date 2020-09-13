import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtIndicator, UdtDate, UdtTime, UdtText, UdtCode } from '../types/UnqualifiedDataTypes';
import { DocumentReference } from './DocumentReferenceGroup';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  salesOrderID: { order: 2, attributeName: 'cbc:SalesOrderID', min: 1, max: 1, classRef: UdtIdentifier },
  copyIndicator: { order: 3, attributeName: 'cbc:CopyIndicator', min: 0, max: 1, classRef: UdtIndicator },
  uuid: { order: 4, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
  issueDate: { order: 5, attributeName: 'cbc:IssueDate', min: 0, max: 1, classRef: UdtDate },
  issueTime: { order: 6, attributeName: 'cbc:IssueTime', min: 0, max: 1, classRef: UdtTime },
  customerReference: { order: 7, attributeName: 'cbc:CustomerReference', min: 0, max: 1, classRef: UdtText },
  orderTypeCode: { order: 8, attributeName: 'cbc:OrderTypeCode', min: 0, max: 1, classRef: UdtCode },
  documentReference: { order: 9, attributeName: 'cac:DocumentReference', min: 0, max: 1, classRef: DocumentReference },
};

type AllowedParams = {
  /** An identifier for this order reference, assigned by the buyer */
  id?: string | UdtIdentifier;
  salesOrderID?: string | UdtIdentifier;
  /** Indicates whether the referenced Order is a copy (true) or the original (false) */
  copyIndicator?: string | boolean | UdtIndicator;
  /** A universally unique identifier for this order reference. */
  uuid?: string | UdtIdentifier;
  /** The date on which the referenced Order was issued */
  issueDate?: string | UdtDate;
  /** The time at which the referenced Order was issued */
  issueTime?: string | UdtTime;
  /** Text used for tagging purchasing card transactions */
  customerReference?: string | UdtText;
  /** A code signifying the type of the referenced Order. */
  orderTypeCode?: string | UdtCode;
  /** A document associated with this reference to an Order */
  documentReference?: DocumentReference;
};

/**
 * http://www.datypic.com/sc/ubl21/e-cac_OrderReference.html
 */
class OrderReference extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:OrderReference');
  }

  setsalesOrderID(value: string | UdtIdentifier) {
    this.attributes.salesOrderID = value instanceof UdtIdentifier ? value : new UdtIdentifier(value);

    return this;
  }
}

export { OrderReference, AllowedParams as OrderReferenceParams };
