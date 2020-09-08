import XsdString from './XsdString';

/**
 * xsd:normalizedString
 *
 * The type xsd:normalizedString represents a character string that may contain any Unicode character allowed by XML. Certain characters,
 * namely the "less than" symbol (<) and the ampersand (&), must be escaped (using the entities &lt; and &amp;, respectively)
 * when used in strings in XML instances.
 * 
 * The xsd:normalizedString type has a whiteSpace facet of replace, which means that the processor replaces each carriage return,
 * line feed, and tab by a single space. This processing is equivalent to the processing of CDATA attribute values in XML 1.0.
 * There is no collapsing of multiple consecutive spaces into a single space.
 * Namespace: http://www.w3.org/2001/XMLSchema
 * MORE INFO: http://www.datypic.com/sc/xsd/t-xsd_normalizedString.html
 * 
 */
export default class XsdNormalizedString extends XsdString{
    constructor(content: string, attributtes?: any){
        super(content, attributtes);
    }
      
}