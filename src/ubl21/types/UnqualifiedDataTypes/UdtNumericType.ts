
import { CctNumericType, AllowedAttributes  } from './essentials/cct/CctNumericType';


export type UdtNumericAttributes = AllowedAttributes;
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing. 
 * It does not require a unit of quantity or unit of measure.
 */

export class UdtNumeric extends CctNumericType {
    /**
     * 
     * @param content value
     * @param attributes attributes
     */
    constructor(content: string, attributes: UdtNumericAttributes ){
        super(content, attributes);
    }
}