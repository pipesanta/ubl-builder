import { XsdNormalizedString } from '../xsd';

export type AllowedAttributes = {
  /** The identification of a list of codes */
  listID: string;
  /** An agency that maintains one or more lists of codes */
  listAgencyID: string;
  /** The name of the agency that maintains the list of codes */
  listAgencyName: string;
  /** The name of a list of codes */
  listName: string;
  /** The version of the list of codes */
  listVersionID: string;
  /***The textual equivalent of the code content component */
  name: string;
  /** The identifier of the language used in the code name */
  languageID: string;
  /**  The Uniform Resource Identifier that identifies where the code list is located */
  listURI: string;
  /**  The Uniform Resource Identifier that identifies where the code list scheme is located */
  listSchemeURI: string;
};
/**
 * A character string to identify and distinguish uniquely,
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
export class CctCodeType extends XsdNormalizedString {
  /**
   *
   * @param {string} content
   * @param {CctCodeTypeAttributes} attributes
   */
  constructor(content: string, attributes?: AllowedAttributes) {
    super(content, attributes);
  }


  parseToJson() {
    const jsonResult: any = { '#text': this.content };
    Object.keys(this.attributes)
      .filter((att) => this.attributes[att])
      .forEach((attribute) => {
        jsonResult[`@${attribute}`] = this.attributes[attribute];
      });
    return jsonResult;
  }

  setListID(value: string) {
    this.attributes.listID = value;
  }

  /** @param {string} value */
  setListAgencyID(value: string) {
    this.attributes.listAgencyID = value;
  }

  /** @param {string} value */
  setListAgencyName(value: string) {
    this.attributes.listAgencyName = value;
  }

  /** @param {string} value */
  setListName(value: string) {
    this.attributes.listName = value;
  }

  /** @param {string} value */
  setlistVersionID(value: string) {
    this.attributes.listVersionID = value;
  }

  /** @param {string} value */
  setName(value: string) {
    this.attributes.name = value;
  }

  /** @param {string} value */
  setLanguageID(value: string) {
    this.attributes.languageID = value;
  }

  setListUri(value: string) {
    this.attributes.listURI = value;
  }

  /** @param {string} value */
  setListSchemeURI(value: string) {
    this.attributes.listSchemeURI = value;
  }
}
