import { IDictionary } from "../generics/IDictionary";

export default class XsdAnySimpleType {
    content: string | number | boolean;
    attributes: IDictionary<string> = {};

    /**
     * @param content Simple content as string
     */
    constructor(content: string | number | boolean, attributes?: any ){
        /** Simple content as string */
        this.content = content;
        this.applyAttributes(attributes || {});

    }

    parseToJson(){
        return { "#text": this.content }
    }

    private applyAttributes(attributes: any){
        Object.keys(attributes)
            .filter(att => attributes[att])
            .forEach((att: string) => this.attributes[att] = attributes[att] );
    }

}
