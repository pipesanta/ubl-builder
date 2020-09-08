import { XsdBoolean } from './essentials/xsd/XsdBoolean';
/**
 * 
 * udt:IndicatorType
 * A list of two mutually exclusive Boolean values that express the only possible states of a property.
 * Unique I D: UBLUDT0000012
 * Category Code: UDT
 * Dictionary Entry Name: Indicator. Type
 * Version I D: 1.0
 * Definition: A list of two mutually exclusive Boolean values that express the only possible states of a property.
 * Representation Term Name: Indicator
 * Primitive Type: string
 * more info http://www.datypic.com/sc/ubl21/t-udt_IndicatorType.html
 * 
 */
export class UdtIndicator extends XsdBoolean {
    /**@type {XsdBoolean}  value*/
    constructor(content: string | boolean ){
        super(content);
        this.validateContent();
    }

    parseToJson(){
        return { "#text": this.content };
    }  

}