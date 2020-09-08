import { XsdDecimal } from '../xsd';

export type AllowedAttributes = {
    /** The type of unit of measure */
    unitCode?: string,
    /** The version of the measure unit code list. */
    unitCodeListVersionID?: string
}
/**
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing. 
 * It does not require a unit of quantity or unit of measure.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_NumericType.html
 */
export class CctMeasureType extends XsdDecimal {
    constructor(content: string, attributes: AllowedAttributes) {
        super(content, attributes);
    }


    parseToJson(){
        const jsonResult: any = { "#text": this.content };
        Object.keys(this.attributes)
            .filter(att =>  this.attributes[att] )
            .forEach(attribute => { jsonResult[`@${attribute}`] = this.attributes[attribute] });
        return jsonResult;
    }
    setUnitCode(value: string){
        this.attributes.unitCode = value;
    }

    setunitCodeListVersionID(value: string){
        this.attributes.unitCodeListVersionID = value;
    }


}