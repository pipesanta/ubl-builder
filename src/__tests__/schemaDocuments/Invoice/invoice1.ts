import { Invoice } from '../../../ubl21/schemaDocuments';

const invoiceOptions = { 
  enviroment: "1", 
  issuer: {
     endDate: "12-12-12", 
     endRange:"", 
     prefix: "", 
     resolutionNumber: "", 
     startDate: "",
     startRange: "",
     technicalKey:"" 
  },
  software: {
    id: "",
    pin:"",
    providerNit: ""
  }
 }


const inv = new Invoice("123123123", invoiceOptions);

 inv.setCustomizationID("este es el id");
 inv.setIssueDate("12-12-12");

 console.log(inv.getXml())
