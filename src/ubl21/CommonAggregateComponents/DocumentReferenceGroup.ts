/* tslint:disable:max-classes-per-file */

/* TODO GANERIC CLASSES */
import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtIndicator, UdtDate, UdtTime, UdtCode, UdtText } from '../types/UnqualifiedDataTypes';
/* TODO GANERIC CLASSES */

import { Attachment } from './Attachment';
import { ValidityPeriod } from './ValidityPeriod';

// const { ValidityPeriod, ValidityPeriodParams } = require("./ValidityPeriod");
// const { IssuerParty, IssuerPartyParams } = require("./PartyTypeGroup");

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  copyIndicator: { order: 2, attributeName: 'cbc:CopyIndicator', min: 0, max: 1, classRef: UdtIndicator },
  uuid: { order: 3, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
  issueDate: { order: 4, attributeName: 'cbc:IssueDate', min: 0, max: 1, classRef: UdtDate },
  issueTime: { order: 5, attributeName: 'cbc:IssueTime', min: 0, max: 1, classRef: UdtTime },
  documentTypeCode: { order: 6, attributeName: 'cbc:DocumentTypeCode', min: 0, max: 1, classRef: UdtCode },
  documentType: { order: 7, attributeName: 'cbc:DocumentType', min: 0, max: 1, classRef: UdtText },
  xPath: { order: 8, attributeName: 'cbc:XPath', min: 0, max: undefined, classRef: UdtText },
  languageID: { order: 9, attributeName: 'cbc:LanguageID', min: 0, max: 1, classRef: UdtIdentifier },
  localeCode: { order: 10, attributeName: 'cbc:LocaleCode', min: 0, max: 1, classRef: UdtCode },
  versionID: { order: 11, attributeName: 'cbc:VersionID', min: 0, max: 1, classRef: UdtIdentifier },
  documentStatusCode: { order: 12, attributeName: 'cbc:DocumentStatusCode', min: 0, max: 1, classRef: UdtCode },
  documentDescription: {
    order: 13,
    attributeName: 'cbc:documentDescription',
    min: 0,
    max: undefined,
    classRef: UdtIdentifier,
  },
  attachment: { order: 14, attributeName: 'cac:Attachment', min: 0, max: 1, classRef: Attachment },
  validityPeriod: { order: 15, attributeName: 'cac:PeriodType', min: 0, max: 1, classRef: ValidityPeriod },
  // issuerParty: { order: 16, attributeName: 'cac:IssuerParty', min: 0, max:1, classRef: IssuerParty },
  //                                   TODO CAC MISSING
  // resultOfVerification: { order: 17, attributeName: 'cac:ResultOfVerification', min: 0, max:1, classRef: null },
  //                                   TODO CAC MISSING
};

// todo jsdoc missing
type AllowedParams = {
  id: string;
  copyIndicator: string;
  uuid: UdtIdentifier | string;
  issueDate: string;
  issueTime: string;
  documentTypeCode: UdtCode | string;
  documentType: string;
  xPath: string;
  languageID: string;
  localeCode: string;
  versionID: string;
  documentStatusCode: string;
  documentDescription: string;
  attachment: string;
  validityPeriod: string;
  issuerParty: string;
};

class DespatchDocumentReference extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DespatchDocumentReference');
  }
}

/**
 * A class to define a reference to an Order.
 */
class DocumentReference extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DocumentReference');
  }

  /**
   * @param value
   */
  setCopyIndicator(value: boolean | UdtIndicator) {
    this.attributes.copyIndicator = value instanceof UdtIndicator ? value : new UdtIndicator(value);
    return this;
  }
}

class InvoiceDocumentReference extends GenericAggregateComponent {
  /**
   * @param content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:InvoiceDocumentReference');
  }
}

class ReceiptDocumentReference extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ReceiptDocumentReference');
  }
}

class StatementDocumentReference extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:StatementDocumentReference');
  }
}

class OriginatorDocumentReference extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:OriginatorDocumentReference');
  }
}

class ContractDocumentReference extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ContractDocumentReference');
  }
}

class AdditionalDocumentReference extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:AdditionalDocumentReference');
  }
}

export {
  DespatchDocumentReference,
  AllowedParams as DespatchDocumentReferenceParams,
  DocumentReference,
  AllowedParams as DocumentReferenceParams,
  InvoiceDocumentReference,
  AllowedParams as InvoiceDocumentReferenceParams,
  ReceiptDocumentReference,
  AllowedParams as ReceiptDocumentReferenceParams,
  StatementDocumentReference,
  AllowedParams as StatementDocumentReferenceParams,
  OriginatorDocumentReference,
  AllowedParams as OriginatorDocumentReferenceParams,
  ContractDocumentReference,
  AllowedParams as ContractDocumentReferenceParams,
  AdditionalDocumentReference,
  AllowedParams as AdditionalDocumentReferenceParams,
};
