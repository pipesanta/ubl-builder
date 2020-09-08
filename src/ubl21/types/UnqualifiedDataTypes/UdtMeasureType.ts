import { CctMeasureType, AllowedAttributes } from "./essentials/cct/CctMeasureType";

export type UdtMeasureAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing. 
 * It does not require a unit of quantity or unit of measure.
 */

export class UdtMeasure extends CctMeasureType {
    constructor(content: string, attributes: UdtMeasureAttributes ){
        super(content, attributes);
    }
}