import { CctAmountType, CctBinaryObjectType } from '../index';

const amo = new CctAmountType("12.0");
console.log(amo.parseToJson());


const aa = new CctBinaryObjectType("todo", { encodingCode:"juan" });
console.log(aa);


test('My Greeter', () => {
  expect( "Hello Carl").toBe('Hello Carl');
});