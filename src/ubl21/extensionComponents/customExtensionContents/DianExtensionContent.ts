import GenericAggregateComponent, {
  IGenericKeyValue,
  ParamsMapValues,
} from '../../CommonAggregateComponents/GenericAggregateComponent';
import { InvoiceControl } from './InvoiceControl';
import { UdtIdentifier, UdtText } from '../../types/UnqualifiedDataTypes';
import { InvoiceSource } from './InvoiceSource';
import { SoftwareProvider } from './SoftwareProvider';
import { AuthorizationProvider } from './AuthorizationProvider';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  // ##################################  TODO CAC MISSING ################################################
  invoiceControl: { order: 1, attributeName: 'sts:InvoiceControl', min: 0, max: 1, classRef: InvoiceControl },
  invoiceSource: { order: 2, attributeName: 'sts:InvoiceSource', min: 0, max: 1, classRef: InvoiceSource },
  softwareProvider: { order: 3, attributeName: 'sts:SoftwareProvider', min: 0, max: 1, classRef: SoftwareProvider },
  softwareSecurityCode: {
    order: 4,
    attributeName: 'sts:SoftwareSecurityCode',
    min: 0,
    max: 1,
    classRef: UdtIdentifier,
  },
  authorizationProvider: {
    order: 5,
    attributeName: 'sts:AuthorizationProvider',
    min: 0,
    max: 1,
    classRef: AuthorizationProvider,
  },
  QRCode: { order: 6, attributeName: 'sts:QRCode', min: 0, max: 1, classRef: UdtText },
};

type AllowedParams = {
  invoiceControl?: InvoiceControl;
  invoiceSource?: InvoiceSource;
  softwareProvider?: SoftwareProvider;
  softwareSecurityCode?: UdtIdentifier;
  authorizationProvider?: AuthorizationProvider;
  QRCode?: string | UdtText;
};

/**
 * Contenido de las definiciónes de extensions de la DIAN.
 */
class DianExtensionsContent extends GenericAggregateComponent {
  /**     *
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DianExtensions');
  }

  /**
   *
   * @param {string | UdtText} value
   */
  setQRCode(value: string | UdtText) {
    this.attributes.QRCode = value instanceof UdtText ? value : new UdtText(value);
  }

  getQRCode(raw = true) {
    return raw ? (this.attributes.QRCode || {}).content : this.attributes.QRCode;
  }
}

export { DianExtensionsContent, AllowedParams as DianExtensionsContentParams };
