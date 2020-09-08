import XsdAnySimpleType from '../xsd/XsdAnySimpleType';

/**
 * 
 * The type xsd:decimal represents a decimal number of arbitrary precision. Schema processors vary in the number of
 *  significant digits they support, but a conforming processor must support a minimum of 18 significant digits.
 *  The format of xsd:decimal is a sequence of digits optionally preceded by a sign ("+" or "-") and optionally containing a period. 
 * The value may start or end with a period. If the fractional part is 0 then the period and trailing zeros may be omitted.
 *  Leading and trailing zeros are permitted, but they are not considered significant. 
 * That is, the decimal values 3.0 and 3.0000 are considered equal.
 * 
 * More info: http://www.datypic.com/sc/xsd/t-xsd_decimal.html
 * 
 */
export default class XsdDecimal extends XsdAnySimpleType{

    constructor(content: string, attributtes?: any){
        super(content, attributtes);
        this.validateContent();
    }

    validateContent(){
        
    }  
}