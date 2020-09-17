import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtText, UdtQuantity, UdtDate, UdtCode, UdtIndicator } from '../types/UnqualifiedDataTypes';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
import { BillingReference } from './BillingReference';
import { DocumentReference } from './DocumentReferenceGroup';
import { Party } from './PartyTypeGroup';
import { Price } from './PriceTypeGroup';
import { PeriodType } from './PeriodTypeGroup';
import { OrderLineReference } from './OrderLineReference';
import { DespatchLineReference, ReceiptLineReference } from './LineReferenceTypeGroup';
import { Delivery } from './DeliveryTypeGroup';
import { PaymentTerms } from './PaymentTermsTypeGroup';
import { TaxTotal } from './TaxTotalTypeGroup';
import { Item } from './ItemTypeGroup';
import { DeliveryTerms } from './DeliveryTerms';

/*
  1    cbc:ID [1..1]    An identifier for this credit note line.
  2    cbc:UUID [0..1]    A universally unique identifier for this credit note line.
  3    cbc:Note [0..*]    Free-form text conveying information that is not contained explicitly in other structures.
  4    cbc:CreditedQuantity [0..1]    The quantity of items credited in this credit note line.
  5    cbc:LineExtensionAmount [0..1]    The total amount for this credit note line, including allowance charges but exclusive of taxes.
  6    cbc:TaxPointDate [0..1]    The date of this credit note line, used to indicate the point at which tax becomes applicable.
  7    cbc:AccountingCostCode [0..1]    The buyer's accounting cost centre for this credit note line, expressed as a code.
  8    cbc:AccountingCost [0..1]    The buyer's accounting cost centre for this credit note line, expressed as text.
  9    cbc:PaymentPurposeCode [0..1]    A code signifying the business purpose for this payment.
  10   cbc:FreeOfChargeIndicator [0..1]    An indicator that this credit note line is free of charge (true) or not (false). The default is false.
  11   cac:InvoicePeriod [0..*]    An invoice period to which this credit note line applies.
  12   cac:OrderLineReference [0..*]    A reference to an order line associated with this credit note line.
  13   cac:DiscrepancyResponse [0..*]    A reason for the credit.
  14   cac:DespatchLineReference [0..*]    A reference to a despatch line associated with this credit note line.
  15   cac:ReceiptLineReference [0..*]    A reference to a receipt line associated with this credit note line.
  16   cac:BillingReference [0..*]    A reference to a billing document associated with this credit note line.
  17   cac:DocumentReference [0..*]    A reference to a document associated with this credit note line.
  18   cac:PricingReference [0..1]    A reference to pricing and item location information associated with this credit note line.
  19   cac:OriginatorParty [0..1]    The party who originated the Order to which the Credit Note is related.
  20   cac:Delivery [0..*]    A delivery associated with this credit note line.
  21   cac:PaymentTerms [0..*]    A specification of payment terms associated with this credit note line.
  22   cac:TaxTotal [0..*]    A total amount of taxes of a particular kind applicable to this credit note line.
  23   cac:AllowanceCharge [0..*]    An allowance or charge associated with this credit note.
  24   cac:Item [0..1]    The item associated with this credit note line.
  25   cac:Price [0..1]    The price of the item associated with this credit note line.
  26   cac:DeliveryTerms [0..*]    Terms and conditions of a delivery associated with this credit note line.
  27   cac:SubCreditNoteLine [0..*]    A class defining one or more Credit Note Lines detailing the credit note line.
  28   cac:ItemPriceExtension [0..1]    The price extension, calculated by multiplying the price per unit by the quantity of items on this credit note line.
*/

// ##################################  TODO CAC MISSING ################################################
const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
  notes: { order: 3, attributeName: 'cbc:Note', min: 0, max: undefined, classRef: UdtText },
  creditedQuantity: { order: 4, attributeName: 'cbc:CreditedQuantity', min: 0, max: 1, classRef: UdtQuantity },
  lineExtensionAmount: { order: 5, attributeName: 'cbc:LineExtensionAmount', min: 0, max: 1, classRef: UdtAmount },
  taxPointDate: { order: 6, attributeName: 'cbc:TaxPointDate', min: 0, max: 1, classRef: UdtDate },
  accountingCostCode: { order: 7, attributeName: 'cbc:AccountingCostCode', min: 0, max: 1, classRef: UdtCode },
  accountingCost: { order: 8, attributeName: 'cbc:AccountingCost', min: 0, max: 1, classRef: UdtText },
  paymentPurposeCode: { order: 9, attributeName: 'cbc:PaymentPurposeCode', min: 0, max: 1, classRef: UdtCode },
  freeOfChargeIndicator: {
    order: 10,
    attributeName: 'cbc:FreeOfChargeIndicator',
    min: 0,
    max: 1,
    classRef: UdtIndicator,
  },
  invoicePeriods: { order: 11, attributeName: 'cac:InvoicePeriod', min: 0, max: undefined, classRef: PeriodType },
  orderLineReferences: {
    order: 12,
    attributeName: 'cac:OrderLineReference',
    min: 0,
    max: undefined,
    classRef: OrderLineReference,
  },
  // DiscrepancyResponses: { order: 13,  attributeName: 'cac:DiscrepancyResponse', min: 0, max: undefined, classRef: null },
  despatchLineReferences: {
    order: 14,
    attributeName: 'cac:DespatchLineReference',
    min: 0,
    max: undefined,
    classRef: DespatchLineReference,
  },
  receiptLineReferences: {
    order: 15,
    attributeName: 'cac:ReceiptLineReference',
    min: 0,
    max: undefined,
    classRef: ReceiptLineReference,
  },
  billingReferences: {
    order: 16,
    attributeName: 'cac:BillingReference',
    min: 0,
    max: undefined,
    classRef: BillingReference,
  },
  documentReferences: {
    order: 17,
    attributeName: 'cac:DocumentReference',
    min: 0,
    max: undefined,
    classRef: DocumentReference,
  },
  // PricingReference: { order: 18,  attributeName: 'cac:PricingReference', min: 0, max: undefined, classRef: PricingReference },
  originatorParty: { order: 19, attributeName: 'cac:OriginatorParty', min: 0, max: 1, classRef: Party },
  deliveries: { order: 20, attributeName: 'cac:Delivery', min: 0, max: undefined, classRef: Delivery },
  paymentTerms: { order: 21, attributeName: 'cac:PaymentTerms', min: 0, max: undefined, classRef: PaymentTerms },
  taxTotals: { order: 22, attributeName: 'cac:TaxTotal', min: 0, max: undefined, classRef: TaxTotal },
  // allowanceCharges: { order: 23,  attributeName: 'cac:AllowanceCharge', min: 0, max: undefined, classRef: null },
  item: { order: 24, attributeName: 'cac:Item', min: 0, max: 1, classRef: Item },
  price: { order: 25, attributeName: 'cac:Price', min: 0, max: 1, classRef: Price },
  deliveryTerms: { order: 26, attributeName: 'cac:DeliveryTerms', min: 0, max: undefined, classRef: DeliveryTerms },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  uuid: string | UdtIdentifier;
  notes: string[] | UdtText[];
  creditedQuantity: string | UdtQuantity;
  lineExtensionAmount: string | UdtAmount;
  taxPointDate: string | UdtDate;
  accountingCostCode: string | UdtCode;
  accountingCost: string | UdtAmount;
  paymentPurposeCode: string | UdtCode;
  freeOfChargeIndicator: string | UdtIndicator;
  invoicePeriods: PeriodType[];
  orderLineReferences: OrderLineReference[];
  // DiscrepancyResponses: ,
  despatchLineReferences: DespatchLineReference[];
  receiptLineReferences: ReceiptLineReference[];
  billingReferences: BillingReference[];
  documentReferences: DocumentReference[];
  // PricingReference: '',
  originatorParty: Party[];
  deliveries: Delivery[];
  paymentTerms: PaymentTerms[];
  taxTotals: TaxTotal[];
  // allowanceCharges: '',
  item: Item;
  price: Price;
  deliveryTerms: DeliveryTerms[];
};

/**
 *
 */
class CreditNoteLineType extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:CreditNoteLineType');
  }

  /**
   * @returns {TaxTotal}
   */
  getTaxTotals() {
    return this.attributes.taxTotals;
  }

  setId(value: string | UdtIdentifier) {
    this.attributes.id = value instanceof UdtIdentifier ? value : new UdtIdentifier(value);
  }
}

export {
  CreditNoteLineType as CreditNoteLine,
  AllowedParams as CreditNoteLineParams,
  CreditNoteLineType as SubCreditNoteLine,
};
