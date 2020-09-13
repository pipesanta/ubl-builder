import GenericAggregateComponent, {
  IGenericKeyValue,
  ParamsMapValues,
} from '../../CommonAggregateComponents/GenericAggregateComponent';
import { UdtText } from '../../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  prefix: { order: 1, attributeName: 'sts:Prefix', min: 0, max: 1, classRef: UdtText },
  from: { order: 2, attributeName: 'sts:From', min: 0, max: 1, classRef: UdtText },
  to: { order: 3, attributeName: 'sts:To', min: 0, max: 1, classRef: UdtText },
};

type AllowedParams = {
  prefix: string | UdtText;
  from: string | UdtText;
  to: string | UdtText;
};

/**
 * Body of Dian extension content
 */
class AuthorizedInvoices extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:DianExtensions');
  }
}

export { AuthorizedInvoices, AllowedParams as AuthorizedInvoicesParams };
