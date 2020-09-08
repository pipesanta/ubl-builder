import { XsdDecimal, XsdAnySimpleType } from '../xsd';
import { UdtAmount } from '../../UdtAmountType';

export type AllowedAttributes = {
    /** The unit of the quantity */
    unitCode: string,
     /** The quantity unit code list. */ 
    unitCodeListID: string,
     /** The identification of the agency that maintains the quantity unit code list */
    unitCodeListAgencyID: string,
     /** The name of the agency which maintains the quantity unit code list. */
    unitCodeListAgencyName: string
}
/**
 * 
 * Unique I D: UNDT000018
 * Category Code: CCT
 * Dictionary Entry Name: Quantity. Type
 * Version I D: 1.0
 * Definition: A counted number of non-monetary units possibly including fractions.
 * Representation Term Name: Quantity
 * Primitive Type: decimal
 * 
 * A counted number of non-monetary units possibly including fractions.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_QuantityType.html
 */
export class CctQuantityType extends XsdDecimal {
    constructor(content: string, attributes?: AllowedAttributes){        
        super(content, attributes);
    }
    
    validateContent(){
        super.validateContent();
    }

    parseToJson(){
        const jsonResult: any = { "#text": this.content };
        Object.keys(this.attributes)
            .filter(att => this.attributes[att])
            .forEach(att => { jsonResult[`@${att}`] = this.attributes[att] });
        return jsonResult;
    }

    setUnitCode(value: string){
        this.attributes.unitCode = value;
    }

    setUnitCodeListID(value: string){
        this.attributes.unitCodeListID =  value;
    }

    setUnitCodeListAgencyID(value: string){
        this.attributes.unitCodeListAgencyID = value;
    }

    setUnitCodeListAgencyName(value: string){
        this.attributes.unitCodeListAgencyName = value;
    }   

}