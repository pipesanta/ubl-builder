// 'use strict'

// const { XsdNormalizedString, XsdString, XsdAnyURI } = require("../xsd");
import { XsdNormalizedString  } from '../xsd';

export type AllowedAttributes = {
    /** The identification of the identification scheme*/
    schemeID?: string
    /** The name of the identification scheme. */
    schemeName?: string,
    /** The identification of the agency that maintains the identification scheme.*/
    schemeAgencyID?: string,
    /** The name of the agency that maintains the identification scheme.*/
    schemeAgencyName?: string,
    /** The version of the identification scheme.*/
    schemeVersionID?: string,
    /** The Uniform Resource Identifier that identifies where the identification scheme data is located. */
    schemeDataURI?: string,
    /** The Uniform Resource Identifier that identifies where the identification scheme is located.*/
    schemeURI?: string
}
/**
 * A character string to identify and distinguish uniquely, 
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */ 
export class CctIdentifierType extends XsdNormalizedString {
    /**
     * 
     * @param {String} content 
     * @param { CctIdentifierTypeAttributes } attributes 
     */
    constructor(content: string, attributes?: AllowedAttributes ){
        super(content, attributes);
    }
    

    parseToJson(){       
        const jsonResult: any = { "#text": this.content };
        Object.keys(this.attributes)
            .filter(att => this.attributes[att])
            .forEach(attribute => {
            jsonResult[`@${attribute}`] = this.attributes[attribute];
        });
        return jsonResult;
    }

    /**
     * 
     * @param {String} scheme 
     */
    setSchemeID(scheme:string){
        this.attributes.schemeID = scheme;
    }

    /**
     * 
     * @param {String} schemeName 
     */
    setSchemeName(schemeName: string){
        this.attributes.schemeName = schemeName;
    }

    /**
     * 
     * @param {String} value 
     */
    setSchemeAgencyID(value: string){
        this.attributes.schemeAgencyID = value;
    }

    /**
     * 
     * @param {String} value 
     */
    setSchemeAgencyName(value: string){
        this.attributes.schemeAgencyName = name;
    }

    /**
     * 
     * @param {String} value 
     */
    setSchemeVersionID(value: string){
        this.attributes.schemeVersionID = value;
    }

    setSchemeDataURI(value: string){
        this.attributes.schemeDataURI = value;

    }

    setSchemeURI(value: string){
        this.attributes.schemeURI = value;
    }

}