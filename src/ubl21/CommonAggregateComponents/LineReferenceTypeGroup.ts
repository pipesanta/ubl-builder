// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtCode } from '../types/UnqualifiedDataTypes';
import { DocumentReference } from './DocumentReferenceGroup';

/* TODO GANERIC CLASSES */

/*
  1  cbc:LineID [1..1] Identifies the referenced line in the document.
  2  cbc:UUID [0..1]   A universally unique identifier for this line reference.
  3  cbc:LineStatusCode [0..1]    A code signifying the status of the referenced line with respect to its original state.
  4  cac:DocumentReference [0..1]    A reference to the document containing the referenced line.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  lineID: { order: 1, attributeName: 'cbc:LineID', min: 0, max: 1, classRef: UdtIdentifier },
  uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UdtIdentifier },
  lineStatusCode: { order: 3, attributeName: 'cbc:LineStatusCode', min: 0, max: 1, classRef: UdtCode },
  documentReference: { order: 4, attributeName: 'cac:DocumentReference', min: 0, max: 1, classRef: DocumentReference },
};

type AllowedParams = {
  /** Identifies the referenced line in the document */
  lineID: string | UdtIdentifier;
  /** A universally unique identifier for this line reference */
  uuid: string | UdtIdentifier;
  /** A code signifying the status of the referenced line with respect to its original state  */
  lineStatusCode: string | UdtCode;
  /** A reference to the document containing the referenced line */
  documentReference: DocumentReference;
};

class LineReference extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:LineReference');
  }
}

export {
  LineReference,
  AllowedParams as LineReferenceParams,
  LineReference as DespatchLineReference,
  LineReference as ReceiptLineReference,
  LineReference as CallForTendersLineReference,
  LineReference as CatalogueLineReference,
  LineReference as DependentLineReference,
  LineReference as ParentDocumentLineReference,
  LineReference as QuotationLineReference,
  LineReference as RequestLineReference,
};
