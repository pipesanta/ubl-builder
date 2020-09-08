// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from "./GenericAggregateComponent";
import { UdtIdentifier, UdtDate } from "../types/UnqualifiedDataTypes";

// const GenericAggregateComponent = require("./GenericAggregateComponent");

// /* TODO GANERIC CLASSES */
// const { UdtIdentifier, UdtName, UdtCode, UdtDate } = require('../types/UnqualifiedDataTypes');
// /* TODO GANERIC CLASSES */


const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max:1, classRef: UdtIdentifier },
    uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max:1, classRef: UdtIdentifier },
    issueDate: { order: 3, attributeName: 'cbc:IssueDate', min: 0, max:1, classRef: UdtDate },

     //                                   TODO CAC MISSING
    // issueDate: { order: 3, attributeName: 'cac:WorkPhaseReference', min: 0, max:1, classRef: UdtDate },
     //                                   TODO CAC MISSING
}

type AllowedParams = {
    /** An identifier for the referenced project. */
    id: string | UdtIdentifier,
    /** A universally unique identifier for the referenced project */
    uuid: string | UdtIdentifier,
    /** The date on which the referenced project was issued */
    issueDate: string | UdtDate,

    //workPhaseReference: A specific phase of work in the referenced project.

}

class ProjectReference extends GenericAggregateComponent {
  
  constructor(content: AllowedParams) {
    super(content, ParamsMap, "cac:ProjectReference");
  }

}

export{
   ProjectReference,
   AllowedParams as ProjectReferenceParams
}
