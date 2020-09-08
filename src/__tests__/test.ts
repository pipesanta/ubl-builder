import { CctAmountType, CctBinaryObjectType, AddressLine, Address } from '../index';
import { UdtText } from '../ubl21/types/UnqualifiedDataTypes';

const amo = new CctAmountType("12.0");
// console.log(amo.parseToJson());


const aa = new CctBinaryObjectType("todo", { encodingCode:"juan" });
// console.log(aa);

const addLine = new AddressLine({ line:  new UdtText("hiii", { languageID: "es" })});
addLine.printAsJson();
// addLine.printAsXml(true)

const address = new Address({ addressLines: [ addLine ]  });
address.printAsJson();
address.printAsXml(true, false);



test('My Greeter', () => {
  expect( "Hello Carl").toBe('Hello Carl');
});