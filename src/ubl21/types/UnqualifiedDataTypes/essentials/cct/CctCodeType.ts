import { XsdNormalizedString } from '../xsd';


type AllowedAttributes = {
    /** The identification of a list of codes */
    listID: String,
     /** An agency that maintains one or more lists of codes */ 
    listAgencyID: String,
     /** The name of the agency that maintains the list of codes */
    listAgencyName: String,
     /** The name of a list of codes */
    listName: String,
     /** The version of the list of codes */
    listVersionID: String,
    /***The textual equivalent of the code content component */
    name: String,
    /** The identifier of the language used in the code name */
    languageID: String,
    /**  The Uniform Resource Identifier that identifies where the code list is located */
    listURI: string,
    /**  The Uniform Resource Identifier that identifies where the code list scheme is located */
    listSchemeURI: string
}
/**
 * A character string to identify and distinguish uniquely, 
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
export default class CctCodeType extends XsdNormalizedString {
    /**
     * 
     * @param {String} content 
     * @param {CctCodeTypeAttributes} attributes 
     */
    constructor(content: string, attributes?: AllowedAttributes){        
        super(content, attributes);     
    }
    
    validateContent(){

    }


    parseToJson(){
        const jsonResult: any = { "#text": this.content };
        Object.keys(this.attributes)
            .filter(att => this.attributes[att])
            .forEach(attribute => { jsonResult[`@${attribute}`] = this.attributes[attribute] });
        return jsonResult;
    }

    setListID(value: string){
        this.attributes.listID = value;
    }

    /** @param {String} value */
    setListAgencyID(value: string){
        this.attributes.listAgencyID = value;
    }

    /** @param {String} value */
    setListAgencyName(value: string){
        this.attributes.listAgencyName = value;
    }

    /** @param {String} value */
    setListName(value: string){
        this.attributes.listName = value;
    }

    /** @param {String} value */
    setlistVersionID(value: string){
        this.attributes.listVersionID = value;
    }    

    /** @param {String} value */
    setName(value: string){
        this.attributes.name  = value;
    }

    /** @param {String} value */
    setLanguageID(value: string){
        this.attributes.languageID = value;
    }

    setListUri(value: string){
        this.attributes.listURI = value;
    }

    /** @param {String} value */
    setListSchemeURI(value: string){
        this.attributes.listSchemeURI = value;
    }
}