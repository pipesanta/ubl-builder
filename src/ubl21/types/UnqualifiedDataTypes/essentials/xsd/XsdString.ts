import XsdAnySimpleType from './XsdAnySimpleType';
/**
 * xsd:anySimpleType *
 * The type xsd:anySimpleType is the base type from which all other built-in types are derived.
 * Any value (including an empty value) is allowed for xsd:anySimpleType.
 * Namespace: http://www.w3.org/2001/XMLSchema
 */
export default class XsdString extends XsdAnySimpleType {
  constructor(content: string, attributes?: any) {
    super(content, attributes);
  }

  validateContent() {
    return;
  }
}
