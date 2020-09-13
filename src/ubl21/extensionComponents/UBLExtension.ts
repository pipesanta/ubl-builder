import GenericAggregateComponent, {
  IGenericKeyValue,
  ParamsMapValues,
} from '../CommonAggregateComponents/GenericAggregateComponent';
import { UdtIdentifier, UdtName, UdtText, UdtCode } from '../types/UnqualifiedDataTypes';
import AnyExtensionContent from './AnyExtensionContent';

/*
    1    cbc:ID [0..1]     An identifier for the Extension assigned by the creator of the extension.
    2    cbc:Name [0..1]     A name for the Extension assigned by the creator of the extension.
    3    ext:ExtensionAgencyID [0..1]     An agency that maintains one or more Extensions.
    4    ext:ExtensionAgencyName [0..1]     The name of the agency that maintains the Extension.
    5    ext:ExtensionVersionID [0..1]     The version of the Extension.
    6    ext:ExtensionAgencyURI [0..1]     A URI for the Agency that maintains the Extension.
    7    ext:ExtensionURI [0..1]     A URI for the Extension.
    8    ext:ExtensionReasonCode [0..1]     A code for reason the Extension is being included.
    9    ext:ExtensionReason [0..1]     A description of the reason for the Extension.
    10    ext:ExtensionContent [1..1]     The definition of the extension content.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UdtIdentifier },
  name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtName },
  extensionAgencyID: { order: 3, attributeName: 'ext:ExtensionAgencyID', min: 0, max: 1, classRef: UdtIdentifier },
  extensionAgencyName: { order: 4, attributeName: 'ext:ExtensionAgencyName', min: 0, max: 1, classRef: UdtText },
  extensionVersionID: { order: 5, attributeName: 'ext:ExtensionVersionID', min: 0, max: 1, classRef: UdtIdentifier },
  extensionAgencyURI: { order: 6, attributeName: 'ext:ExtensionAgencyURI', min: 0, max: 1, classRef: UdtIdentifier },
  extensionURI: { order: 7, attributeName: 'ext:ExtensionURI', min: 0, max: 1, classRef: UdtIdentifier },
  extensionReasonCode: { order: 8, attributeName: 'ext:ExtensionReasonCode', min: 0, max: 1, classRef: UdtCode },
  extensionReason: { order: 9, attributeName: 'ext:ExtensionReason', min: 0, max: 1, classRef: UdtText },
  extensionContent: { order: 10, attributeName: 'ext:ExtensionContent', min: 1, max: 1, classRef: AnyExtensionContent },
};

type AllowedParams = {
  id?: string | UdtIdentifier;
  name?: string | UdtName;
  extensionAgencyID?: string | UdtIdentifier;
  extensionAgencyName?: string | UdtText;
  extensionVersionID?: string | UdtIdentifier;
  extensionAgencyURI?: string | UdtIdentifier;
  extensionURI?: string | UdtIdentifier;
  extensionReasonCode?: string | UdtCode;
  extensionReason?: string | UdtText;
  extensionContent?: AnyExtensionContent;
};

/**
 *
 */
class UBLExtension extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:UBLExtension');
  }

  setExtensionContent(value: AnyExtensionContent) {
    if (!(value instanceof AnyExtensionContent)) {
      throw new Error('value must be an AnyExtensionContent instance');
    }
    this.attributes.extensionContent = value;
  }

  /**
   * @returns {AnyExtensionContent}
   */
  getExtensionContent() {
    return this.attributes.extensionContent;
  }
}

export { UBLExtension as UBLExtensionType, AllowedParams as UBLExtensionTypeParams };
