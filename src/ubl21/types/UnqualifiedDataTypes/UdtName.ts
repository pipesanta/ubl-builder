import { CctTextType, AllowedAttributes  } from './essentials/cct/CctTextType';


export type UdtNameAttributes = AllowedAttributes;

export class UdtName extends CctTextType {
    /**
     * @param content 
     * @param attributes 
     */
    constructor(content: string, attributes?: UdtNameAttributes){
        super(content, attributes);
    }
    
}