import { CctQuantityType, AllowedAttributes } from './essentials/cct/CctQuantityType';

export type UdtQuantityAttributes = AllowedAttributes;
/**
 * A counted number of non-monetary units, possibly including a fractional part.
 */
export class UdtQuantity extends CctQuantityType {
    /**
     * 
     * @param {String} content 
     * @param {UdtQuantityAttributes} attributes 
     */
    constructor(content: string, attributes: UdtQuantityAttributes ){
        super(content, attributes);
    }
    
}