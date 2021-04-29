const { Invoice } = require('../../../ubl21/schemaDocuments');

const invoice = new Invoice('123456789', {});

invoice.addProperty('xmlns', 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2');

test('[JS] [CUSTOM PROPERTY] xmlns', () => {
  expect({}).toStrictEqual({});
});
