import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtDate, UdtIdentifier, UdtText, UdtTime, UdtCode, UdtName } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  URI: { order: 1, attributeName: 'cbc:URI', min: 0, max: 1, classRef: UdtIdentifier },
  documentHash: { order: 2, attributeName: 'cbc:DocumentHash', min: 0, max: 1, classRef: UdtText },
  hashAlgorithmMethod: { order: 3, attributeName: 'cbc:HashAlgorithmMethod', min: 0, max: 1, classRef: UdtText },
  expiryDate: { order: 4, attributeName: 'cbc:ExpiryDate', min: 0, max: 1, classRef: UdtDate },
  expiryTime: { order: 5, attributeName: 'cbc:ExpiryTime', min: 0, max: 1, classRef: UdtTime },
  mimeCode: { order: 6, attributeName: 'cbc:MimeCode', min: 0, max: 1, classRef: UdtCode },
  formatCode: { order: 7, attributeName: 'cbc:FormatCode ', min: 0, max: 1, classRef: UdtCode },
  encodingCode: { order: 8, attributeName: 'cbc:EncodingCode', min: 0, max: 1, classRef: UdtCode },
  characterSetCode: { order: 9, attributeName: 'cbc:CharacterSetCode', min: 0, max: 1, classRef: UdtCode },
  fileName: { order: 10, attributeName: 'cbc:FileName', min: 0, max: 1, classRef: UdtName },
  description: { order: 11, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UdtText },
};

type AllowedParams = {
  /** The Uniform Resource Identifier (URI) that identifies the external object as an Internet resource */
  URI: UdtIdentifier | string;
  /** A hash value for the externally stored object */
  documentHash: UdtText | string;
  /** The date on which this period ends */
  hashAlgorithmMethod: UdtText | string;
  /** The date on which availability of the resource can no longer be relied upon */
  expiryDate: UdtDate | string;
  /** The time after which availability of the resource can no longer be relied upon */
  expiryTime: UdtTime | string;
  /** A code signifying the mime type of the external object */
  mimeCode: UdtCode | string;
  /** A code signifying the format of the external object */
  formatCode: UdtCode | string;
  /** A code signifying the encoding/decoding algorithm used with the external object */
  encodingCode: UdtCode | string;
  /** A code signifying the character set of an external document */
  characterSetCode: UdtCode | string;
  /** The file name of the external object */
  fileName: UdtName | string;
  /** Text describing the external object */
  description: UdtText[] | string[];
};
// const GenericAggregateComponent = require("./GenericAggregateComponent");

class ExternalReference extends GenericAggregateComponent {
  /**
   *
   * @param content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ExternalReference');
  }
}

export { ExternalReference, AllowedParams as ExternalReferenceAttributes };
