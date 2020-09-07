import XsdAnySimpleType from './XsdAnySimpleType';

/**
 * The type xsd:base64Binary represents binary data as a sequence of binary octets. It uses base64 encoding,
 *  as described in RFC 2045.The following rules apply to xsd:base64Binary values:
 * The following characters are allowed: the letters A to Z (upper and lower case), digits 0 through 9, 
 * the plus sign ("+"), the slash ("/"), the equals sign ("=") and XML whitespace characters.
 * XML whitespace characters may appear anywhere in the value.
 * 
 * The number of non-whitespace characters must be divisible by 4.
 * 
 * Equals signs may only appear at the end of the value, and there may be zero, one or two of them. 
 * If there are two equals signs, they must be preceded by one of the following characters: AQgw. 
 * If there is only one equals sign, it must be preceded by one of the following characters: AEIMQUYcgkosw048.
 *  In either case, there may be whitespace in between the necessary characters and the equals sign(s).
 * 
 * Namespace: http://www.w3.org/2001/XMLSchema
 * 
 * Schema Document: datatypes.xsd
 * 
 * 
 */
export default class XsdBase64Binary extends XsdAnySimpleType{
    constructor(content: string, attributtes: any){
        super(content, attributtes);
        this.validateContent();
    }

    validateContent(){
    }
}