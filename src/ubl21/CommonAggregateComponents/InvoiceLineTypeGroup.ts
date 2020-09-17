// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtText, UdtQuantity, UdtDate, UdtCode, UdtIndicator } from '../types/UnqualifiedDataTypes';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
import { PeriodType } from './PeriodTypeGroup';
import { OrderLineReference } from './OrderLineReference';
import { DespatchLineReference, ReceiptLineReference } from './LineReferenceTypeGroup';
import { BillingReference } from './BillingReference';
import { DocumentReference } from './DocumentReferenceGroup';
import { Party } from './PartyTypeGroup';
import { Delivery } from './DeliveryTypeGroup';
import { PaymentTerms } from './PaymentTermsTypeGroup';
import { TaxTotal, WithholdingTaxTotal } from './TaxTotalTypeGroup';
import { Item } from './ItemTypeGroup';
import { Price } from './PriceTypeGroup';
import { DeliveryTerms } from './DeliveryTerms';

/*
  1    cbc:ID [1..1]    An identifier for this invoice line.
  2    cbc:UUID [0..1]    A universally unique identifier for this invoice line.
  3    cbc:Note [0..*]    Free-form text conveying information that is not contained explicitly in other structures.
  4    cbc:InvoicedQuantity [0..1]    The quantity (of items) on this invoice line.
  5    cbc:LineExtensionAmount [1..1]    The total amount for this invoice line, including allowance charges but net of taxes.
  6    cbc:TaxPointDate [0..1]    The date of this invoice line, used to indicate the point at which tax becomes applicable.
  7    cbc:AccountingCostCode [0..1]    The buyer's accounting cost centre for this invoice line, expressed as a code.
  8    cbc:AccountingCost [0..1]    The buyer's accounting cost centre for this invoice line, expressed as text.
  9    cbc:PaymentPurposeCode [0..1]    A code signifying the business purpose for this payment.
  10    cbc:FreeOfChargeIndicator [0..1]    An indicator that this invoice line is free of charge (true) or not (false). The default is false.
  11    cac:InvoicePeriod [0..*]    An invoice period to which this invoice line applies.
  12    cac:OrderLineReference [0..*]    A reference to an order line associated with this invoice line.
  13    cac:DespatchLineReference [0..*]    A reference to a despatch line associated with this invoice line.
  14    cac:ReceiptLineReference [0..*]    A reference to a receipt line associated with this invoice line.
  15    cac:BillingReference [0..*]    A reference to a billing document associated with this invoice line.
  16    cac:DocumentReference [0..*]    A reference to a document associated with this invoice line.
  17    cac:PricingReference [0..1]    A reference to pricing and item location information associated with this invoice line.
  18    cac:OriginatorParty [0..1]    The party who originated the Order to which the Invoice is related.
  19    cac:Delivery [0..*]    A delivery associated with this invoice line.
  20    cac:PaymentTerms [0..*]    A specification of payment terms associated with this invoice line.
  21    cac:AllowanceCharge [0..*]    An allowance or charge associated with this invoice line.
  22    cac:TaxTotal [0..*]    A total amount of taxes of a particular kind applicable to this invoice line.
  23    cac:WithholdingTaxTotal [0..*]    A reference to a TaxTotal class describing the amount that has been withhold by the authorities, e.g. if the creditor is in dept because of non paid taxes.
  24    cac:Item [1..1]    The item associated with this invoice line.
  25    cac:Price [0..1]    The price of the item associated with this invoice line.
  26    cac:DeliveryTerms [0..1]    Terms and conditions of the delivery associated with this invoice line.
  27    cac:SubInvoiceLine [0..*]    An invoice line subsidiary to this invoice line.
  28    cac:ItemPriceExtension [0..1]    The price extension, calculated by multiplying the price per unit by the quantity of items on this invoice line.
*/

// ##################################  TODO CAC MISSING ################################################
const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
  notes: { order: 3, attributeName: 'cbc:Note', min: 0, max: undefined, classRef: UdtText },
  invoicedQuantity: { order: 4, attributeName: 'cbc:InvoicedQuantity', min: 0, max: 1, classRef: UdtQuantity },
  lineExtensionAmount: { order: 5, attributeName: 'cbc:LineExtensionAmount', min: 1, max: 1, classRef: UdtAmount },
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
  despatchLineReference: {
    order: 13,
    attributeName: 'cac:DespatchLineReference',
    min: 0,
    max: undefined,
    classRef: DespatchLineReference,
  },
  receiptLineReference: {
    order: 14,
    attributeName: 'cac:ReceiptLineReference',
    min: 0,
    max: undefined,
    classRef: ReceiptLineReference,
  },
  billingReference: {
    order: 15,
    attributeName: 'cac:BillingReference',
    min: 0,
    max: undefined,
    classRef: BillingReference,
  },
  documentReference: {
    order: 16,
    attributeName: 'cac:DocumentReference',
    min: 0,
    max: undefined,
    classRef: DocumentReference,
  },
  // PricingReference: { order: 17,  attributeName: 'cac:PricingReference', min: 0, max: undefined, classRef: PricingReference },
  originatorParty: { order: 18, attributeName: 'cac:OriginatorParty', min: 0, max: undefined, classRef: Party },
  delivery: { order: 19, attributeName: 'cac:Delivery', min: 0, max: undefined, classRef: Delivery },
  paymentTerms: { order: 20, attributeName: 'cac:PaymentTerms', min: 0, max: undefined, classRef: PaymentTerms },
  // allowanceCharges: { order: 21,  attributeName: 'cac:AllowanceCharge', min: 0, max: undefined, classRef: AllowanceCharge },
  taxTotals: { order: 22, attributeName: 'cac:TaxTotal', min: 0, max: undefined, classRef: TaxTotal },
  withholdingTaxTotal: {
    order: 23,
    attributeName: 'cac:WithholdingTaxTotal',
    min: 0,
    max: undefined,
    classRef: WithholdingTaxTotal,
  },
  item: { order: 24, attributeName: 'cac:Item', min: 0, max: undefined, classRef: Item },
  price: { order: 25, attributeName: 'cac:Price', min: 0, max: undefined, classRef: Price },
  deliveryTerms: { order: 26, attributeName: 'cac:DeliveryTerms', min: 0, max: undefined, classRef: DeliveryTerms },
  // subInvoiceLine: { order: 27,  attributeName: 'cac:SubInvoiceLine', min: 0, max: undefined, classRef: SubInvoiceLine },
};

type AllowedParams = {
  id: string | UdtIdentifier;
  uuid: string | UdtIdentifier;
  notes: string[] | UdtText[];
  invoicedQuantity: string | UdtQuantity;
  lineExtensionAmount: string | UdtAmount;
  taxPointDate: string | UdtDate;
  accountingCostCode: string | UdtCode;
  accountingCost: string | UdtText;
  paymentPurposeCode: string | UdtCode;
  freeOfChargeIndicator: string | UdtIndicator;
  invoicePeriods: PeriodType[];
  orderLineReferences: OrderLineReference[];
  despatchLineReference: DespatchLineReference[];
  receiptLineReference: ReceiptLineReference[];
  billingReference: BillingReference[];
  documentReference: DocumentReference[];
  // PricingReference: "",
  originatorParty: Party;
  delivery: Delivery;
  paymentTerms: PaymentTerms;
  // allowanceCharges: "",
  taxTotals: TaxTotal[];
  withholdingTaxTotal: WithholdingTaxTotal[];
  item: Item;
  price: Price;
  deliveryTerms: DeliveryTerms;
  // subInvoiceLine: "",
};

/**
 *
 */
class InvoiceLine extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:InvoiceLine');
  }

  /**
   * @returns { TaxTotal[] }
   */
  getTaxTotals() {
    return this.attributes.taxTotals;
  }

  /**
   * @param { TaxTotal[] } taxTotals
   */
  setTaxTotals(taxTotals: TaxTotal[]) {
    if (!Array.isArray(taxTotals)) throw new Error('value must to be an Array');
    taxTotals.forEach((value) => {
      if (!(value instanceof TaxTotal)) throw new Error('All items must to be instance of TaxTotal class');
    });
    this.attributes.taxTotals = taxTotals;
  }

  setId(value: string | UdtIdentifier) {
    this.attributes.id = value instanceof UdtIdentifier ? value : new UdtIdentifier(value);
  }

  /**
   *
   * @param {boolean} rawValue
   * @returns { UdtAmount | string }
   */
  getLineExtensionAmount(rawValue = true) {
    return rawValue ? this.attributes.lineExtensionAmount.content : this.attributes.lineExtensionAmount;
  }

  setLineExtensionAmount(value: string | UdtAmount, currencyID = 'COP') {
    if (!value) throw new Error('value is required');
    this.attributes.lineExtensionAmount = value instanceof UdtAmount ? value : new UdtAmount(value, { currencyID });
  }

  /**
   * @returns { Price } Price object
   */
  getPrice() {
    return this.attributes.price;
  }
}

export { InvoiceLine, AllowedParams as InvoiceLineParams };
