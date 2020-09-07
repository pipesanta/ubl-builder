import { XsdAnyURI, XsdNormalizedString } from '../xsd';
import { IDictionary } from '../generics/IDictionary';

type AllowedAttributes = {
    /** The format of the binary content.*/
    format?: string,
     /** The mime type of the binary object */ 
    mimeCode?: string,
    /** Specifies the decoding algorithm of the binary object */
    encodingCode?: string,
    /** The character set of the binary object if the mime type is text */
    characterSetCode?: string,
    /** The Uniform Resource Identifier that identifies where the binary object is located */
    uri?: string,
    /*** The filename of the binary object */
    filename?: string
}
/**
 * cct:BinaryObjectType
 *  A set of finite-length sequences of binary octets.
 * 
 * Namespace: urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2
 * 
 * CCTS properties: *
 *   Unique ID: UNDT000002
 *   Category Code: CCT
 *   Dictionary Entry Name: Binary Object. Type
 *   Version I D: 1.0
 *   Definition: A set of finite-length sequences of binary octets.
 *   Representation Term Name: Binary Object
 *   Primitive Type: binary
 * 
 * MORE INFO: http://www.datypic.com/sc/ubl21/t-cct_BinaryObjectType.html
 */
export default class CctBinaryObjectType extends XsdNormalizedString {
    
    /**
     * 
     * @param content 
     * @param attributes 
     */
    constructor(content: string, attributes ?: AllowedAttributes){        
        super(content, attributes);
       
    }
    
    parseToJson(){
        const jsonResult: any = { "#text": this.content };
        Object.keys(this.attributes)
            .filter(att => this.attributes[att])
            .forEach(attribute => { jsonResult[`@${attribute}`] = this.attributes[attribute] });
        return jsonResult;
    }

    /**
     * @param value 
     */
    setFormat(value: string){
        this.attributes.format= value;
    }

    /**
     * 
     * @param {String} value 
     */
    setMimecode(value: string){
        this.attributes.mimeCode = value;
    }

    /**
     * 
     * @param {String} value 
     */
    setEncodingCode(value: string){
        this.attributes.encodingCode = value;
    }

    setCharacterSetCode(value: string){
        this.attributes.characterSetCode = value;
    }

    /**
     * 
     * @param {String} value 
     */
    setUri(value: string){
        this.attributes.uri = value;
    }

    setFileName(value: string){
        this.attributes.filename = value;
    }

}
