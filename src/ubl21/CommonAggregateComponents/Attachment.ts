import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtBinaryObject } from '../types/UnqualifiedDataTypes';
import { ExternalReference } from './ExternalReference';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  embeddedDocumentBinaryObject: {
    order: 1,
    attributeName: 'cbc:EmbeddedDocumentBinaryObject',
    min: 0,
    max: 1,
    classRef: UdtBinaryObject,
  },
  externalReference: {
    order: 1,
    attributeName: 'cac:ExternalReference',
    min: 0,
    max: 1,
    classRef: ExternalReference,
  },
};

type AllowedParams = {
  /** A binary large object containing an attached document */
  embeddedDocumentBinaryObject?: UdtBinaryObject | string;
  /** A reference to an attached document that is external to the document(s) being exchanged */
  externalReference?: ExternalReference;
};

class Attachment extends GenericAggregateComponent {
  /**
   *
   * @param content children nodes
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:Attachment');
  }
}

export { Attachment, AllowedParams as AttachmentParams };
