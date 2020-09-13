import { UdtIdentifier, UdtName, UdtCode } from '../types/UnqualifiedDataTypes';
import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UdtIdentifier },
  name: { order: 2, attributeName: 'cbc:Name', min: 1, max: 1, classRef: UdtName },
  localeCode: { order: 3, attributeName: 'cbc:LocaleCode', min: 1, max: 1, classRef: UdtCode },
};

type AllowedParams = {
  /** An identifier for this language */
  id: UdtIdentifier | string;
  /** The name of this language */
  name: UdtName | string;
  /**  A code signifying the locale in which this language is used */
  localeCode: UdtCode | string;
};

class Language extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:Language');
  }
}

export { Language, AllowedParams as LanguageParams };
