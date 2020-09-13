import { CctAmountType, CctBinaryObjectType, AddressLine, Address, Invoice } from '../index';
import { UdtText } from '../ubl21/types/UnqualifiedDataTypes';

const amo = new CctAmountType('12.0');
// console.log(amo.parseToJson());

// const aa = new CctBinaryObjectType('todo', { encodingCode: 'juan' });
// // console.log(aa);

// const addLine = new AddressLine({ line: new UdtText('hiii', { languageID: 'es' }) });
// console.log(addLine.getAsJson())
// addLine.printAsXml(true)

// const address = new Address({ addressLines: [addLine] });
// console.log(address.getAsJson());
// console.log(address.getAsXml(true, false));

test('My Greeter', () => {
  expect('Hello Carl').toBe('Hello Carl');
});

// const invoiceOptions = { 
//   enviroment: "1", 
//   issuer: {
//      endDate: "12-12-12", 
//      endRange:"", 
//      prefix: "", 
//      resolutionNumber: "", 
//      startDate: "",
//      startRange: "",
//      technicalKey:"" 
//   },
//   software: {
//     id: "",
//     pin:"",
//     providerNit: ""
//   }
//  }

// const inv = new Invoice("asd", invoiceOptions );

//  inv.setCustomizationID("este es el id");
//  inv.setIssueDate("12-12-12");

//  console.log(inv.getXml())
