import * as builder from 'xmlbuilder';

export type ParamsMapValues = {
  order: number;
  attributeName: string;
  min: number;
  max?: number;
  classRef: any;
};

export interface IGenericKeyValue<T> {
  [id: string]: T;
}

/**
 * Generic class to avoid repeat several code in all CommonAggregateComponent files
 */
export default class GenericAggregateComponent {
  classRefName: string;
  paramsMap: IGenericKeyValue<ParamsMapValues> = {};
  attributes: IGenericKeyValue<any> = {};
  /**
   *
   * @param content component content
   * @param paramsMap Params Map
   * @param [name="GenericAggregateComponent"] Class name
   */
  constructor(content: any, paramsMap: IGenericKeyValue<ParamsMapValues>, name = 'GenericAggregateComponent') {
    this.classRefName = name;
    this.paramsMap = paramsMap;
    this.assignContent(content);
  }

  parseToJson() {
    const jsonResponse: any = {};
    Object.keys(this.paramsMap)
      .filter((attkey) => this.attributes[attkey])
      .forEach((attKey) => {
        const { attributeName, max } = this.paramsMap[attKey];
        if (Array.isArray(this.attributes[attKey]) && max !== undefined) {
          throw new Error('array given and max is defined validate structure');
        }
        const attType = typeof this.attributes[attKey];
        jsonResponse[attributeName] = Array.isArray(this.attributes[attKey])
          ? this.attributes[attKey].map((e: any) => e.parseToJson())
          : this.attributes[attKey].parseToJson();
      });
    return jsonResponse;
  }

  assignContent(content: any) {
    Object.keys(content)
      .filter((att) => content[att] != null)
      .forEach((att) => {
        const AbstractClass = this.paramsMap[att].classRef;
        if (Array.isArray(content[att])) {
          this.attributes[att] = content[att].map((subItem: any) =>
            subItem instanceof AbstractClass ? subItem : new AbstractClass(subItem.content, subItem.attributes),
          );
        } else {
          const childContent = ['boolean', 'string', 'number'].includes(typeof content[att])
            ? content[att]
            : content[att].content;
          const childAttributes = content[att].attributes || {};
          this.attributes[att] =
            content[att] instanceof AbstractClass ? content[att] : new AbstractClass(childContent, childAttributes);
        }
      });
  }

  /**
   * @param {boolean} [pretty=true] true for print pretty. true by default
   * @param {boolean} [headless=false] false for print pretty. true by default
   *
   */
  getAsXml(pretty = true, headless = false) {
    const xmlRef = this.parseToJson();
    const xml = builder.create(xmlRef, { encoding: 'UTF-8', standalone: false, headless }).end({ pretty });
    return xml; // console.log(xml);
  }

  /**
   * @param {boolean} [deep=false] true for deep print
   */
  getAsJson(deep = false) {
    return  this.parseToJson();
  }
}
