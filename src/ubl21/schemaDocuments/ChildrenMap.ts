interface IGenericKeyValue<T> {
    [id: string]: T;
}

type SchemaDocumentChild = {
    order: number;
    childName: string;
    min: number;
    max?: number;
};

export const INVOICE_CHILDREN_MAP: IGenericKeyValue<SchemaDocumentChild> = {
    UBLExtensions: { order: 1, childName: 'ext:UBLExtensions', min: 0, max: 1 },
    UBLVersionID: { order: 2, childName: 'cbc:UBLVersionID', min: 0, max: 1 },
    customizationID: { order: 3, childName: 'cbc:CustomizationID', min: 0, max: 1 },
    profileID: { order: 4, childName: 'cbc:ProfileID', min: 0, max: 1 },
    profileExecutionID: { order: 5, childName: 'cbc:ProfileExecutionID', min: 0, max: 1 },
    id: { order: 6, childName: 'cbc:ID', min: 1, max: 1 },
    copyIndicator: { order: 7, childName: 'cbc:CopyIndicator', min: 0, max: 1 },
    uuid: { order: 8, childName: 'cbc:UUID', min: 0, max: 1 },
    issueDate: { order: 9, childName: 'cbc:IssueDate', min: 1, max: 1 },
    issueTime: { order: 10, childName: 'cbc:IssueTime', min: 0, max: 1 },
    dueDate: { order: 11, childName: 'cbc:DueDate', min: 0, max: 1 },
    invoiceTypeCode: { order: 12, childName: 'cbc:InvoiceTypeCode', min: 0, max: 1 },
    notes: { order: 13, childName: 'cbc:Note', min: 0, },
    taxPointDate: { order: 14, childName: 'cbc:TaxPointDate', min: 0, max: 1 },
    documentCurrencyCode: { order: 15, childName: 'cbc:DocumentCurrencyCode', min: 0, max: 1 },
    taxCurrencyCode: { order: 16, childName: 'cbc:TaxCurrencyCode', min: 0, max: 1 },
    pricingCurrencyCode: { order: 17, childName: 'cbc:PricingCurrencyCode', min: 0, max: 1 },
    paymentCurrencyCode: { order: 18, childName: 'cbc:PaymentCurrencyCode', min: 0, max: 1 },
    paymentAlternativeCurrencyCode: {
        order: 19,
        childName: 'cbc:PaymentAlternativeCurrencyCode',
        min: 0,
        max: 1
    },
    accountingCostCode: { order: 20, childName: 'cbc:AccountingCostCode', min: 0, max: 1 },
    accountingCost: { order: 21, childName: 'cbc:AccountingCost', min: 0, max: 1 },
    lineCountNumeric: { order: 22, childName: 'cbc:LineCountNumeric', min: 0, max: 1 },
    buyerReference: { order: 23, childName: 'cbc:BuyerReference', min: 0, max: 1 },
    invoicePeriods: { order: 24, childName: 'cac:InvoicePeriod', min: 0, },
    orderReference: { order: 25, childName: 'cac:OrderReference', min: 0, max: 1 },
    billingReferences: { order: 26, childName: 'cac:BillingReference', min: 0, },
    despatchDocumentReferences: {
        order: 27,
        childName: 'cac:DespatchDocumentReference',
        min: 0,

    },
    receiptDocumentReferences: {
        order: 28,
        childName: 'cac:ReceiptDocumentReference',
        min: 0
    },
    statementDocumentReferences: {
        order: 29,
        childName: 'cac:StatementDocumentReference',
        min: 0,

    },
    originatorDocumentReferences: {
        order: 30,
        childName: 'cac:OriginatorDocumentReference',
        min: 0,

    },
    contractDocumentReferences: {
        order: 31,
        childName: 'cac:ContractDocumentReference',
        min: 0,

    },
    additionalDocumentReferences: {
        order: 32,
        childName: 'cac:AdditionalDocumentReference',
        min: 0,

    },
    projectReferences: { order: 33, childName: 'cac:ProjectReference', min: 0, },
    signatures: { order: 34, childName: 'cac:Signature', min: 0, },
    accountingSupplierParty: { order: 35, childName: 'cac:AccountingSupplierParty', min: 1, max: 1 },
    accountingCustomerParty: { order: 36, childName: 'cac:AccountingCustomerParty', min: 1, max: 1 },
    payeeParty: { order: 37, childName: 'cac:PayeeParty', min: 0, max: 1 },
    buyerCustomerParty: { order: 38, childName: 'cac:BuyerCustomerParty', min: 0, max: 1 },
    sellerSupplierParty: { order: 39, childName: 'cac:SellerSupplierParty', min: 0, max: 1 },
    taxRepresentativeParty: { order: 40, childName: 'cac:TaxRepresentativeParty', min: 0, max: 1 },
    deliveries: { order: 41, childName: 'cac:Delivery', min: 0, },
    deliveryTerms: { order: 42, childName: 'cac:DeliveryTerms', min: 0, max: 1 },
    paymentMeans: { order: 43, childName: 'cac:PaymentMeans', min: 0, },
    paymentTerms: { order: 44, childName: 'cac:PaymentTerms', min: 0, },
    prepaidPayments: { order: 45, childName: 'cac:PrepaidPayment', min: 0, },
    allowanceCharges: { order: 46, childName: 'cac:AllowanceCharge', min: 0, },
    taxExchangeRate: { order: 47, childName: 'cac:TaxExchangeRate', min: 0, max: 1 },
    pricingExchangeRate: { order: 48, childName: 'cac:PricingExchangeRate', min: 0, max: 1 },
    paymentExchangeRate: { order: 49, childName: 'cac:PaymentExchangeRate', min: 0, max: 1 },
    paymentAlternativeExchangeRate: {
        order: 50,
        childName: 'cac:PaymentAlternativeExchangeRate',
        min: 0,
        max: 1
    },
    taxTotals: { order: 51, childName: 'cac:TaxTotal', min: 0, },
    withholdingTaxTotals: { order: 52, childName: 'cac:WithholdingTaxTotal', min: 0, },
    legalMonetaryTotal: { order: 53, childName: 'cac:LegalMonetaryTotal', min: 1, max: 1 },
    invoiceLines: { order: 54, childName: 'cac:InvoiceLine', min: 0, max: 1 },
};