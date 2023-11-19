import {
  InvoiceLine,
  InvoiceLineParams,
  TaxTotal,
  TaxTotalTypeParams,
  LegalMonetaryTotal,
  MonetaryTotalParams,
  PrepaidPayment,
  PaymentTypeParams,
  PaymentExchangeRate,
  ExchangeRateParams,
  PaymentTerms,
  PaymentTermsTypeParams,
  DeliveryTerms,
  DeliveryTermsParams,
  PaymentMeans,
  PaymentMeansParams,
  Delivery,
  DeliveryTypeParams,
  TaxRepresentativeParty,
  PartyParams,
  AccountingCustomerParty,
  CustomerPartyParams,
  AccountingSupplierParty,
  SupplierPartyTypeParams,
  Signature,
  SignatureParams,
  ProjectReference,
  ProjectReferenceParams,
  AdditionalDocumentReference,
  AdditionalDocumentReferenceParams,
  ContractDocumentReference,
  ContractDocumentReferenceParams,
  OriginatorDocumentReference,
  OriginatorDocumentReferenceParams,
  StatementDocumentReference,
  StatementDocumentReferenceParams,
  ReceiptDocumentReference,
  ReceiptDocumentReferenceParams,
  DespatchDocumentReference,
  DespatchDocumentReferenceParams,
  BillingReference,
  BillingReferenceParams,
  PeriodTypeParams,
  PeriodType,
  OrderReference,
  OrderReferenceParams,
  TaxSubtotal,
  TaxCategory,
  TaxScheme,
  AllowanceCharge,
} from '../CommonAggregateComponents';

import {
  InvoiceControl,
  InvoiceControlParams,
  AuthorizedInvoices,
  UBLExtensions,
  UBLExtensionType,
  DianExtensions,
  DianExtensionsContent,
  InvoiceSource,
  SoftwareProvider,
  SoftwareProviderParams,
  AuthorizationProvider,
} from '../extensionComponents';

import {
  UdtName,
  UdtIdentifier,
  UdtCode,
  UdtCodeAttributes,
  UdtText,
  UdtTextAttributes,
  UdtDate,
  UdtIndicator,
  UdtTime,
  UdtIdentifierAttributes,
  UdtAmount,
  UdtQuantity,
  UBLVersionID,
  UBLVersionIDAttributes,
  UdtNumeric,
  UdtNumericAttributes,
} from '../types/UnqualifiedDataTypes';

import { decomposeTime } from '../../tools/dateFormatter';
import * as builder from 'xmlbuilder';
import { SHA384 } from '../../tools/shas';
import { addition, fixDecimals } from '../../tools/mathTools';
import { IGenericKeyValue } from '../CommonAggregateComponents/GenericAggregateComponent';
import { INVOICE_CHILDREN_MAP } from './ChildrenMap';

type InvoiceOptions = {
  /** Issue time to create issues field like issuetime, issue date. Current Date by default . */
  timestamp?: number;
  /** DIAN enviroment.  "1" for production: "2" for testing */
  enviroment?: string;
  /** object with configuration of Invoice issuer */
  issuer: {
    /** resolution number */
    resolutionNumber: string;
    /** Issuer technical Id */
    technicalKey: string;
    /** Assigned prefix to issuer */
    prefix: string;
    /** Authorized start number eg. 990000000 */
    startRange: string;
    /** Authorized end number eg. 950000000 */
    endRange: string;
    /** Authorization start Date with format yyyy-mm-dd eg. 2019-01-19 */
    startDate: string;
    /**  Authorization end Date with format yyyy-mm-dd eg. 2030-01-19 */
    endDate: string;
  };
  /** object with configuration of software provider */
  software: {
    /** Software Id */
    id: string;
    /** Software Pin */
    pin: string;
    /** Technology provider's NIT */
    providerNit: string;
  };
};

type XmlRefType = {
  Invoice: any;
};

export default class Invoice {
  private options: InvoiceOptions;
  private xmlRef: XmlRefType;
  private children: IGenericKeyValue<any> = {};

  /**
   *
   * @param id Invoice id
   * @param options Invoice options
   */
  constructor(id: string, options: InvoiceOptions) {
    if (!id) throw new Error('invoice ID is required');
    if (!options) throw new Error('options object is required required');

    this.xmlRef = {
      Invoice: {},
    };

    options.timestamp = options.timestamp || Date.now();
    options.enviroment = options.enviroment || '2';

    if (!['1', '2'].includes(options.enviroment)) {
      throw new Error('Enviroment value is not allowed');
    }

    // options.issuer = options.issuer || {};
    // if(!options.issuer.resolutionNumber) throw "Resolution number is required";
    // if(!options.issuer.prefix) throw "Issuer prefix is required";
    // if(!options.issuer.startRange) throw "Software start range is required";
    // if(!options.issuer.endRange) throw "Software end range is required";
    // if(!options.issuer.startDate) throw "Software start Date is required";
    // if(!options.issuer.endDate) throw "Software end date is required";
    // if(!options.issuer.technicalKey) throw "Technical ID is required";

    // options.software = options.software || {};
    // if(!options.software.id) throw "Software ID is required";
    // if(!options.software.providerNit) throw "Software provider is required";
    // if(!options.software.pin) throw "Software Pin is required";

    this.options = options || {};

    const { year, month, dayOfMonth, hourOfDay, minute, second } = decomposeTime(options.timestamp);

    // DEFAULT VALUES
    // this.setID(id);
    // this.setProfileID('DIAN 2.1'); // mandatory
    // this.setProfileExecutionID(this.options.enviroment); // DIAN enviroment

    //  this.setIssueDate(`${year}-${month}-${dayOfMonth}`);
    // this.setIssueTime(`${hourOfDay}:${minute}:${second}-05:00`);
    // this.setUBLVersionID('UBL 2.1');
    // this.setDocumentCurrencyCode('COP'); // Divisa de toda la factura
    // this.calculateDianExtension(); // fill Dian extension content
    // DEFAULT VALUES

    // this.fillEmptyExtensionForSignature();
  }

  addProperty(key: string, value: string): Invoice {
    this.xmlRef.Invoice[`@${key}`] = value;
    return this;
  }

  removeProperty(key: string, value: string) {
    this.xmlRef.Invoice[`@${key}`] = value;
    return this;
  }

  setDefaultProperties() {
    const defaultProperties = [
      { key: 'xmlns', value: 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2' },
      { key: 'xmlns:cac', value: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2' },
      { key: 'xmlns:cbc', value: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2' },
      { key: 'xmlns:ds', value: 'http://www.w3.org/2000/09/xmldsig#' },
      { key: 'xmlns:ext', value: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2' },
      { key: 'xmlns:sts', value: 'http://www.dian.gov.co/contratos/facturaelectronica/v1/Structures' },
      // "dian:gov:co:facturaelectronica:Structures-2-1" ,
      { key: 'xmlns:xades', value: 'http://uri.etsi.org/01903/v1.3.2#' },
      { key: 'xmlns:xades141', value: 'http://uri.etsi.org/01903/v1.4.1#' },
      { key: 'xmlns:xsi', value: 'http://www.w3.org/2001/XMLSchema-instance' },
      {
        key: 'xsi:schemaLocation',
        value:
          'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 http://docs.oasis-open.org/ubl/os-UBL-2.1/xsd/maindoc/UBL-Invoice-2.1.xsd',
      },
    ];

    defaultProperties.forEach((item) => this.addProperty(item.key, item.value));
  }

  /**
   * An identifier for the Extension assigned by the creator of the extension.
   * @param value
   */
  setUBLExtensions(value: UBLExtensions): Invoice {
    this.validateInstanceOf(value, [UBLExtensions]);

    this.children.UBLExtensions = value;
    return this;
  }

  /**
   * 2. Identifies the earliest version of the UBL 2 schema for this document type that defines
   * all of the elements that might be encountered in the current instance.
   * @param value
   * @param attributes
   */
  setUBLVersionID(value: string | UBLVersionID, attributes?: UBLVersionIDAttributes) {
    this.validateInstanceOf(value, ['string', UBLVersionID]);
    this.children.UBLVersionID = value instanceof UBLVersionID ? value : new UBLVersionID(value, attributes);

    return this;
  }

  /**
   * 3. Identifies a user-defined customization of UBL for a specific use.
   * @param value
   * @param attributes
   */
  setCustomizationID(value: string | UdtIdentifier, attributes?: UdtIdentifierAttributes): Invoice {
    this.validateInstanceOf(value, ['string', UdtIdentifier]);
    this.children.customizationID = value instanceof UdtIdentifier ? value : new UdtIdentifier(value, attributes);

    return this;
  }

  /**
   * 4. Identifies a user-defined profile of the customization of UBL being used.
   * @param value value
   * @param attributes attributes
   */
  setProfileID(value: string | UdtIdentifier, attributes?: UdtIdentifierAttributes): Invoice {
    this.validateInstanceOf(value, ['string', UdtIdentifier]);

    this.children.profileID = value instanceof UdtIdentifier ? value : new UdtIdentifier(value, attributes);
    return this;
  }

  /**
   * 5. Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * @param value value
   * @param attributes attributes
   */
  setProfileExecutionID(value: string | UdtIdentifier, attributes?: UdtIdentifierAttributes) {
    this.validateInstanceOf(value, ['string', UdtIdentifier]);
    this.children.profileExecutionID = value instanceof UdtIdentifier ? value : new UdtIdentifier(value, attributes);
    return this;
  }

  /**
   * 6. An identifier for this document, assigned by the sender.
   * @param value value
   * @param attributes options
   */
  setID(value: string | UdtIdentifier, attributes = {}): Invoice {
    this.validateInstanceOf(value, ['string', UdtIdentifier]);

    this.children.id = value instanceof UdtIdentifier ? value : new UdtIdentifier(value, attributes);

    return this;
  }

  /**
   *
   * @param raw if true returns strin value, or else Udt identifier object
   */
  getID(raw = true): string | UdtIdentifier {
    return raw ? this.children.id.content : this.children.id;
  }

  /**
   * 7. Indicates whether this document is a copy (true) or not (false).
   * @param { Boolean } value
   * @returns {Invoice}
   */
  setCopyIndicator(value: boolean): Invoice {
    this.validateInstanceOf(value, ['boolean']);

    this.children.copyIndicator = new UdtIndicator(value);
    return this;
  }

  /**
   * 8. A universally unique identifier for an instance of this document.
   * @param { String } value
   * @param { UdtIdentifierAttributes } attributes
   * @returns {Invoice}
   */
  setUUID(value: string | UdtIdentifier, attributes?: UdtIdentifierAttributes): Invoice {
    this.validateInstanceOf(value, ['string', UdtIdentifier]);

    this.children.uuid = value instanceof UdtIdentifier ? value : new UdtIdentifier(value, attributes);
    return this;
  }

  /**
   * 9. The date, assigned by the sender, on which this document was issued.
   * @param value
   */
  setIssueDate(value: string): Invoice {
    this.validateInstanceOf(value, ['string']);
    this.children.issueDate = new UdtDate(value);
    return this;
  }

  /**
   * 10. The time, assigned by the sender, at which this document was issued.
   * @param value
   */
  setIssueTime(value: string): Invoice {
    this.validateInstanceOf(value, ['string']);

    this.children.issueTime = new UdtTime(value);
    return this;
  }

  /**
   * 11. A code signifying the type of the Invoice.
   * @param value
   */
  setDueDate(value: string): Invoice {
    this.validateInstanceOf(value, ['string']);
    this.children.dueDate = new UdtDate(value);
    return this;
  }

  /**
   * 12. A code signifying the type of the Invoice.
   * @param { String } value
   * @param { UdtCodeAttributes } attributes
   * @returns {Invoice}
   */
  setInvoiceTypeCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    this.validateInstanceOf(value, ['string']);

    this.children.invoiceTypeCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);
    return this;
  }

  /**
   * 13. Free-form text pertinent to this document,
   * conveying information that is not contained explicitly in other structures.
   * @param value
   * @param attributes
   */
  addNote(value: string, attributes?: UdtTextAttributes): Invoice {
    if (value === null) {
      throw new Error('invalid value');
    }

    if (!this.children.notes) {
      this.children.notes = [];
    }

    this.children.notes.push(new UdtText(value, attributes));
    return this;
  }

  /**
   * 14. The date of the Invoice, used to indicate the point at which tax becomes applicable.
   * @param value
   */
  setTaxPointDate(value: string | UdtDate): Invoice {
    this.validateInstanceOf(value, ['string', UdtDate]);

    this.children.taxPointDate = value instanceof UdtDate ? value : new UdtDate(value);
    return this;
  }

  /**
   * 15. A code signifying the default currency for this document
   * @param value
   * @param attributes
   */
  setDocumentCurrencyCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.children.documentCurrencyCode = null;
    // }

    this.children.documentCurrencyCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);

    return this;
  }

  /**
   * 16. A code signifying the currency used for tax amounts in the Invoice
   * @param value
   * @param attributes
   */
  setTaxCurrencyCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.taxCurrencyCode = null;
    // }

    this.children.taxCurrencyCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);
    return this;
  }

  /**
   * 17. A code signifying the currency used for prices in the Invoice
   * @param value exmaples: COP | USD | AED ...
   * @param attributes
   */
  setPricingCurrencyCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.pricingCurrencyCode = null;
    // }

    this.children.pricingCurrencyCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);

    return this;
  }

  /**
   * 18. A code signifying the currency used for payment in the Invoice
   * @param value exmaples: COP | USD | AED ...
   * @param attributes
   */
  setPaymentCurrencyCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.paymentCurrencyCode = null;
    // }

    this.children.paymentCurrencyCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);
    return this;
  }

  /**
   * 19. A code signifying the alternative currency used for payment in the Invoice.
   * @param value  exmaples: COP | USD | AED ...
   * @param attributes
   */
  setPaymentAlternativeCurrencyCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.paymentAlternativeCurrencyCode = null;
    // }

    this.children.paymentAlternativeCurrencyCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);
    return this;
  }

  /**
   * 20. The buyer's accounting code, applied to the Invoice as a whole.
   * @param value exmaples: COP | USD | AED ...
   * @param attributes
   */
  setAccountingCostCode(value: string | UdtCode, attributes?: UdtCodeAttributes): Invoice {
    // if (value === null) {
    //   this.accountingCostCode = null;
    // }

    this.children.accountingCostCode = value instanceof UdtCode ? value : new UdtCode(value, attributes);
    return this;
  }

  /**
   * 21. The buyer's accounting code, applied to the Invoice as a whole, expressed as text.
   * @param { String } value
   * @param { UdtTextAttributes } attributes options
   * @returns {Invoice}
   */
  setAccountingCost(value: string | UdtText, attributes?: UdtTextAttributes): Invoice {
    this.children.accountingCost = value instanceof UdtText ? value : new UdtText(value, attributes);

    return this;
  }

  /**
   * 22. The number of lines in the document
   * @param value
   * @param attributes
   */
  setLineCountNumeric(value: string | UdtNumeric, attributes?: UdtNumericAttributes): Invoice {
    this.children.lineCountNumeric = value instanceof UdtNumeric ? value : new UdtNumeric(value, attributes);
    return this;
  }

  /**
   * 23. A reference provided by the buyer used for internal routing of the document
   * @param value
   * @param attributes
   */
  setBuyerReference(value: string | UdtText, attributes?: UdtTextAttributes) {
    // if (value === null) {
    //   this.buyerReference = null;
    // }

    this.children.buyerReference = value instanceof UdtText ? value : new UdtText(value, attributes);
    return this;
  }

  /**
   * 24. A period to which the Invoice applies.
   * @param value
   */
  addInvoicePeriod(value: PeriodType | PeriodTypeParams): Invoice {
    if (!this.children.invoicePeriods) this.children.invoicePeriods = [];
    const itemToPush = value instanceof PeriodType ? value : new PeriodType(value);
    this.children.invoicePeriods.push(itemToPush);

    return this;
  }

  clearInvoicePeriods() {
    this.children.invoicePeriods = null;
  }

  /**
   * 25. A reference to the Order with which this Invoice is associated
   * @param value
   */
  setOrderReference(value: OrderReference | OrderReferenceParams): Invoice {
    // if (input === null) {
    //   this.orderReference = null;
    // }

    this.children.orderReference = value instanceof OrderReference ? value : new OrderReference(value);

    return this;
  }

  /**
   * 26.  A reference to a billing document associated with this document.
   * @param value
   */
  addBillingReference(value: BillingReference | BillingReferenceParams): Invoice {
    if (!this.children.billingReferences) {
      this.children.billingReferences = [];
    }

    const itemToPush = value instanceof BillingReference ? value : new BillingReference(value);
    this.children.billingReferences.push(itemToPush);

    return this;
  }

  /**
   * 27.  A reference to a Despatch Advice associated with this document.
   * @param input
   */
  addDespatchDocumentReference(input: DespatchDocumentReference | DespatchDocumentReferenceParams): Invoice {
    if (!this.children.despatchDocumentReferences) {
      this.children.despatchDocumentReferences = [];
    }
    const itemToPush = input instanceof DespatchDocumentReference ? input : new DespatchDocumentReference(input);
    this.children.despatchDocumentReferences.push(itemToPush);

    return this;
  }

  /**
   *
   * @param { ReceiptDocumentReferenceParams } input
   * @returns {Invoice}
   */
  /**
   * 28. A reference to a Receipt Advice associated with this document.
   * @param input
   */
  addReceiptDocumentReference(input: ReceiptDocumentReference | ReceiptDocumentReferenceParams): Invoice {
    if (!this.children.receiptDocumentReferences) {
      this.children.receiptDocumentReferences = [];
    }
    const itemToPush = input instanceof ReceiptDocumentReference ? input : new ReceiptDocumentReference(input);
    this.children.receiptDocumentReferences.push(itemToPush);

    return this;
  }

  /**
   * 29. A reference to a Receipt Advice associated with this document.
   * @param { StatementDocumentReferenceParams } input
   * @returns {Invoice}
   */
  addStatementDocumentReference(input: StatementDocumentReference | StatementDocumentReferenceParams): Invoice {
    if (!this.children.statementDocumentReferences) {
      this.children.statementDocumentReferences = [];
    }
    const itemToPush = input instanceof StatementDocumentReference ? input : new StatementDocumentReference(input);

    this.children.statementDocumentReferences.push(itemToPush);

    return this;
  }

  /**
   * 30. A reference to an originator document associated with this document.
   * @param input
   */
  addOriginatorDocumentReference(input: OriginatorDocumentReference | OriginatorDocumentReferenceParams): Invoice {
    if (!this.children.originatorDocumentReferences) {
      this.children.originatorDocumentReferences = [];
    }
    const itemToPush = input instanceof OriginatorDocumentReference ? input : new OriginatorDocumentReference(input);
    this.children.originatorDocumentReferences.push(itemToPush);
    return this;
  }

  /**
   * 31. A reference to a contract associated with this document.
   * @param input
   */
  addContractDocumentReference(input: ContractDocumentReference | ContractDocumentReferenceParams): Invoice {
    if (!this.children.contractDocumentReferences) {
      this.children.contractDocumentReferences = [];
    }
    const itemToPush = input instanceof ContractDocumentReference ? input : new ContractDocumentReference(input);
    this.children.contractDocumentReferences.push(itemToPush);
    return this;
  }

  /**
   * 32. A reference to an additional document associated with this document.
   * @param input
   */
  addAdditionalDocumentReference(input: AdditionalDocumentReference | AdditionalDocumentReferenceParams): Invoice {
    if (!this.children.additionalDocumentReferences) {
      this.children.additionalDocumentReferences = [];
    }
    const itemToPush = input instanceof AdditionalDocumentReference ? input : new AdditionalDocumentReference(input);
    this.children.additionalDocumentReferences.push(itemToPush);
    return this;
  }

  /**
   *
   * @param input
   */
  addProjectReference(input: ProjectReference | ProjectReferenceParams): Invoice {
    if (!this.children.projectReferences) {
      this.children.projectReferences = [];
    }
    const itemToPush = input instanceof ProjectReference ? input : new ProjectReference(input);
    this.children.projectReferences.push(itemToPush);
    return this;
  }

  /**
   * 34. A signature applied to this document.
   * @param { SignatureParams } input
   * @returns {Invoice}
   */
  addSignature(value: Signature | SignatureParams): Invoice {
    if (!this.children.signatures) {
      this.children.signatures = [];
    }
    const itemToPush = value instanceof Signature ? value : new Signature(value);
    this.children.signatures.push(itemToPush);
    return this;
  }

  /**
   * 35. The accounting supplier party.
   * @param { SupplierPartyTypeParams } input
   * @returns {Invoice}
   */
  setAccountingSupplierParty(value: AccountingSupplierParty): Invoice {
    this.children.accountingSupplierParty =
      value instanceof AccountingSupplierParty ? value : new AccountingSupplierParty(value);
    return this;
  }

  /**
   *
   * @param { AccountingCustomerParty } input
   * @returns {Invoice}
   */
  /**
   * 36. [required] The accounting customer party.
   * @param input
   */
  setAccountingCustomerParty(value: AccountingCustomerParty): Invoice {
    this.children.accountingCustomerParty =
      value instanceof AccountingCustomerParty ? value : new AccountingCustomerParty(value);
    return this;
  }

  /**
   * 37.  The payee.
   * @param { any } input
   * @returns {Invoice}
   */
  setPayeeParty(input: any) {
    throw new Error('not implemented');
  }

  /**
   * 38.  The buyer
   * @param { any } input
   * @returns {Invoice}
   */
  setBuyerCustomerParty(input: any) {
    throw new Error('not implemented');
  }

  /**
   * 39.  The seller
   * @param { any } input
   * @returns {Invoice}
   */
  setSellerSupplierParty(input: any) {
    throw new Error('not implemented');
  }

  /**
   * 40. The tax representative.
   * @param { TaxRepresentativeParty | PartyParams  } input
   * @returns {Invoice}
   */
  setTaxRepresentativeParty(input: TaxRepresentativeParty | PartyParams) {
    this.children.taxRepresentativeParty =
      input instanceof TaxRepresentativeParty ? input : new TaxRepresentativeParty(input);
  }

  /**
   *
   * @param value
   */
  addDelivery(value: Delivery | DeliveryTypeParams) {
    if (!this.children.deliveries) {
      this.children.deliveries = [];
    }
    const itemToPush = value instanceof Delivery ? value : new Delivery(value);

    this.children.deliveries.push(itemToPush);
    return this;
  }

  /**
   * 42
   * @param value
   */
  setDeliveryTerms(value: DeliveryTerms | DeliveryTermsParams): Invoice {
    this.children.deliveryTerms = value instanceof DeliveryTerms ? value : new DeliveryTerms(value);
    return this;
  }

  /**
   *
   * @param value
   */
  addPaymentMeans(value: PaymentMeans | PaymentMeansParams): Invoice {
    if (!this.children.paymentMeans) {
      this.children.paymentMeans = [];
    }
    const itemToPush = value instanceof PaymentMeans ? value : new PaymentMeans(value);
    this.children.paymentMeans.push(itemToPush);
    return this;
  }

  /**
   * 44 PrepaidPayment, PaymentTypeParams
   * @param value
   */
  addPaymentTerm(value: any) {
    throw new Error('not implemented');
  }

  /**
   * 45 A prepaid payment.
   * @param value
   */
  addPrepaidPayment(value: PrepaidPayment | PaymentTypeParams): Invoice {
    if (!this.children.prepaidPayments) {
      this.children.prepaidPayments = [];
    }
    const itemToPush = value instanceof PrepaidPayment ? value : new PrepaidPayment(value);
    this.children.prepaidPayments.push(itemToPush);
    return this;
  }

  /**
   * 46 A discount or charge that applies to a price component..
   * @param value
   */
  addAllowanceCharge(value: AllowanceCharge): Invoice {
    if (!this.children.allowanceCharges) {
      this.children.allowanceCharges = [];
    }
    const itemToPush = value instanceof AllowanceCharge ? value : new AllowanceCharge(value);
    this.children.allowanceCharges.push(itemToPush);
    return this;
  }

  /**
   * 47 A discount or charge that applies to a price component..
   * @param value
   */
  setTaxExchangeRate(value: any) {
    throw new Error('not implemented');
  }

  /**
   * 48 The exchange rate between the document currency and the pricing currency..
   * @param value
   */
  setPricingExchangeRate(value: any) {
    throw new Error('not implemented');
  }

  /**
   * 49 The exchange rate between the document currency and the payment currency.
   * @param {  } value
   */
  setPaymentExchangeRate(value: PaymentExchangeRate | ExchangeRateParams): Invoice {
    this.children.paymentExchangeRate = value instanceof PaymentExchangeRate ? value : new PaymentExchangeRate(value);
    return this;
  }

  /**
   * 50 The exchange rate between the document currency and the payment alternative currency.
   * @param { any } value
   */
  setPaymentAlternativeExchangeRate(value: any) {
    throw new Error('not implemented');
  }

  /**
   * 51 The total amount of a specific type of tax
   * @param value
   */
  addTaxTotal(value: TaxTotal | TaxTotalTypeParams) {
    if (!this.children.taxTotals) {
      this.children.taxTotals = [];
    }

    const itemToPush = value instanceof TaxTotal ? value : new TaxTotal(value);
    this.children.taxTotals.push(itemToPush);
    return this;
  }

  /**
   * 52 the total withholding tax
   * @param { any } value
   */
  addWithholdingTaxTotal(value: any) {
    throw new Error('not implemented');
  }

  /**
   * 53 The total amount payable on the Invoice, including Allowances, Charges, and Taxes
   * @param value
   */
  setLegalMonetaryTotal(value: LegalMonetaryTotal | MonetaryTotalParams): Invoice {
    this.children.legalMonetaryTotal = value instanceof LegalMonetaryTotal ? value : new LegalMonetaryTotal(value);
    return this;
  }

  /**
   *
   *
   * @param {InvoiceLine | InvoiceLineParams} value
   */
  /**
   * 54. A line describing an invoice item
   * TODO: verify the use of custom mathTools class
   * @param value
   */
  addInvoiceLine(value: InvoiceLine | InvoiceLineParams): Invoice {
    if (!this.children.invoiceLines) {
      this.children.invoiceLines = [];
    }
    const invoiceLine = value instanceof InvoiceLine ? value : new InvoiceLine(value);

    this.children.invoiceLines.push(invoiceLine);
    return this;
  }

  // /*
  // #################################################################################
  // ############################      CUSTOM METHODS     ############################
  // #################################################################################
  // */

  /**
   * @param {String} taxId Tax's id to search
   * @param {Boolean} [asString=true] resturns as String
   * @returns { String | Number } Tax Total amount
   */
  /**
   *
   * @param taxId
   * @param asString
   */
  findTaxTotalById(taxId: string, asString = true): string | number {
    const taxTotal: TaxTotal = (this.children.taxTotals || []).find(
      (tt: TaxTotal) => tt.getTaxSubtotals()[0].getTaxCategory().getTaxScheme().getId() === taxId,
    );

    const taxAmount = taxTotal ? fixDecimals(taxTotal.getTaxAmount()) : '0.00';
    return asString ? taxAmount : parseFloat(taxAmount);
  }

  /**
   * (COLOMBIA) DIAN rule to apply cufe value
   * @returns {Invoice}
   */
  applyCufeCode(): void {
    let paramsToEncode = '';

    const ivaTaxAmount = this.findTaxTotalById('01'); // Iva Tax
    const incTaxAmount = this.findTaxTotalById('04'); // INC Tax
    const icaTaxAmount = this.findTaxTotalById('03'); // ICA Tax

    const codeToHash =
      this.children.invoiceTypeCode.content === '03'
        ? this.options.software.pin // for contingency Invoice
        : this.options.issuer.technicalKey;

    // console.log({ ivaTaxAmount, incTaxAmount, icaTaxAmount });

    const mapToHash = [
      // Número de factura.(prefijo concatenado con el número de la factura).
      { name: 'NumFac', value: this.children.id.content },
      // Fecha de factura
      { name: 'FecFac', value: this.children.issueDate.content },
      // Hora de la factura incluyendo GMT
      { name: 'HorFac', value: this.children.issueTime.content },
      /* Valor de la Factura sin Impuestos, con punto decimal, con decimales a dos (2) dígitos, sin
        separadores de miles, ni símbolo pesos.
      */
      { name: 'Valor Bruto', value: this.children.legalMonetaryTotal.getLineExtensionAmount() },
      // 01 Este valor es fijo
      { name: 'CodImp1', value: '01' },
      /* Valor impuesto 01 - IVA, con punto decimal, con decimales a dos (2) dígitos, sin separadores
        de miles, ni símbolo pesos. Si no esta referenciado el impuesto 01 – IVA este valor se
        representa con 0.00 
      */
      { name: 'Valor Impuesto 1', value: ivaTaxAmount },
      // 04 Este valor es fijo.
      { name: 'CodImp2', value: '04' },
      /* Valor impuesto 04 - Impuesto Nacional al Consumo, con punto decimal, con decimales a dos
        (2) dígitos, sin separadores de miles, ni símbolo pesos. Si no esta referenciado el impuesto
        04- INC este valor se representa con 0.00
      */
      { name: 'ValImp2', value: incTaxAmount },
      // 03 Este valor es fijo.
      { name: 'CodImp3', value: '03' },
      /* Valor impuesto 03 - ICA, con punto decimal, con decimales a dos (2) dígitos, sin separadores
        de miles, ni símbolo pesos. Si no esta referenciado el impuesto 03 - ICA este valor se
        representa con 0.00 */
      { name: 'ValImp3', value: icaTaxAmount }, // todo
      /* Valor Total, con punto decimal, con decimales a dos (2) dígitos, sin separadores de miles, ni
        símbolo pesos 
        /Invoice/cac:LegalMonetaryTotal/cbc:PayableAmount/>
      */
      { name: 'ValTot', value: this.children.legalMonetaryTotal.getPayableAmount() },
      /* NIT del Facturador Electrónico sin puntos ni guiones, sin digito de verificación.
        /Invoice/ cac:AccountingSupplierParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID/>
      */
      { name: 'NitFE', value: this.children.accountingSupplierParty.getParty().getTaxSchemes()[0].getCompanyID() },
      /*
        Número de identificación del adquirente sin puntos ni guiones, sin digito de verificación.
        /Invoice/ cac:AccountingCustomerParty/cac:Party/cac:PartyTaxScheme/cbc:CompanyID/>
      */
      { name: 'NumAdq', value: this.children.accountingCustomerParty.getParty().getTaxSchemes()[0].getCompanyID() },
      /* 
        La clave técnica se encuentra en la consultar del rango de numeración que se hacer a
        trevés del Web Service, la cual no esta expuesto dentro del XML
        Clave técnica del rango de facturación.
      */
      { name: 'ClTec', value: codeToHash },
      /* Número de identificación del ambiente utilizado por el contribuyente para emitir la factura
        validar el numeral 6.1.1. 
      */
      { name: 'TipoAmbiente', value: this.options.enviroment }, // 1: produccion, 2: pruebas
    ];

    paramsToEncode = mapToHash.map((item) => item.value).join('');
    // console.log("Composicion del CUFE => ", paramsToEncode);
    const CUFE = new SHA384().getHash(paramsToEncode, 'binary', 'hex');
    this.setUUID(CUFE, { schemeName: 'CUFE-SHA384', schemeID: this.options.enviroment });
  }

  applyQRCode(): void {
    const CUFE = this.children.uuid.content;
    const stringToHash = `https://catalogovpfe.dian.gov.co/document/searchqr?documentkey=${CUFE}`;
    const QRCode = new SHA384().getHash(stringToHash, 'binary', 'hex');
    this.children.UBLExtensions.getDianUblExtension()
      .getExtensionContent()
      .getDianExtensionsContent()
      .setQRCode(QRCode);
    // console.log("QRCode CALCULADO ==> ", QRCode);
  }
  /**
   * @returns {Invoice}
   */
  finalizeDocument(): Invoice {
    // updaye the LineCountNumeric
    this.setLineCountNumeric(this.children.invoiceLines.length);
    // give id for each invoiceLine
    this.children.invoiceLines.forEach((invoiceLine: InvoiceLine, index: number) => {
      invoiceLine.setId((index + 1).toString());
    });

    // Calculate and set CUFE
    this.applyCufeCode();
    // Calculate and set QRCode
    this.applyQRCode();

    return this;
  }

  calculateDianExtension() {
    const softwareProvider = this.options.software;
    const issuer = this.options.issuer;

    const softwareSecurityCodeHashed = new SHA384().getHash(
      softwareProvider.id + softwareProvider.pin + this.children.id.content,
      'binary',
      'hex',
    );

    const extensionsNode = new UBLExtensions();

    extensionsNode.addUBLExtension(
      new UBLExtensionType({
        extensionContent: new DianExtensions({
          dianExtensions: new DianExtensionsContent({
            invoiceControl: new InvoiceControl({
              invoiceAuthorization: issuer.resolutionNumber,
              authorizationPeriod: new PeriodType({
                startDate: issuer.startDate,
                endDate: issuer.endDate,
              }),
              authorizedInvoices: new AuthorizedInvoices({
                prefix: issuer.prefix,
                from: issuer.startRange,
                to: issuer.endRange,
              }),
            }),
            invoiceSource: new InvoiceSource({
              identificationCode: {
                content: 'CO',
                attributes: {
                  listAgencyID: '6',
                  listAgencyName: 'United Nations Economic Commission for Europe',
                  listSchemeURI: 'urn:oasis:names:specification:ubl:codelist:gc:CountryIdentificationCode-2.1',
                },
              },
            }),
            softwareProvider: new SoftwareProvider({
              // NIT del proveedor tecnologico
              providerID: new UdtIdentifier(softwareProvider.providerNit, {
                schemeAgencyID: '195',
                schemeAgencyName: 'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
                schemeID: '9', // Codigo de verificacion del NIT
                schemeName: '31', // indica que el tipo de documento es NIT
              }),
              // Id del software
              softwareID: new UdtIdentifier(softwareProvider.id, {
                schemeAgencyID: '195',
                schemeAgencyName: 'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
              }),
            }),
            softwareSecurityCode: new UdtIdentifier(softwareSecurityCodeHashed, {
              schemeAgencyID: '195',
              schemeAgencyName: 'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
            }),
            authorizationProvider: new AuthorizationProvider({
              // NIT de la DIAN
              authorizationProviderID: new UdtIdentifier('800197268', {
                schemeAgencyID: '195',
                schemeAgencyName: 'CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)',
                schemeID: '4',
                schemeName: '31',
              }),
            }),
          }),
        }),
      }),
    );

    this.setUBLExtensions(extensionsNode);
  }

  getQRCode() {
    return (
      this.children.UBLExtensions.getDianUblExtension().getExtensionContent().getDianExtensionsContent().getQRCode() ||
      null
    );
  }

  /**
   *
   * @param attribute attribute name
   * @param value value
   * @param classRefs list of allowed classes
   */
  private validateInstanceOf(value: any, classRefs: any[]): void {
    // if(!value){
    //   this.children[attribute] = null
    // }

    const matchList = classRefs.filter((classRef) => {
      if (typeof classRef === 'string') {
        return typeof value === classRef;
      }
      return value instanceof classRef;
    });

    if (matchList.length === 0) {
      const classNames = classRefs.map((cr) => cr.name || cr);
      throw new Error('VAlue must to be instance of [ ' + classNames.join(' or ') + ']');
    }
  }

  /**
   *
   * @param pretty Pretty format
   * @param headless result without headers
   */
  getXml(pretty = false, headless = false): string {
    Object.keys(INVOICE_CHILDREN_MAP)
      .filter((attKey) => this.children[attKey])
      .forEach((attKey) => {
        const { childName, max } = INVOICE_CHILDREN_MAP[attKey];

        const isChildAnArray = Array.isArray(this.children[attKey]);
        // validate array condition
        if (max && max > 1 && !isChildAnArray) {
          throw new Error(`${attKey} must to be an Array`);
        }

        this.xmlRef.Invoice[childName] = isChildAnArray
          ? this.children[attKey].map((e: any) => e.parseToJson())
          : this.children[attKey].parseToJson();
      });

    return builder.create(this.xmlRef, { encoding: 'UTF-8', standalone: false, headless }).end({ pretty });
  }
}
