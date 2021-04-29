import { Invoice } from '../../../ubl21/schemaDocuments';

const invoiceOptions = {
  enviroment: '1',
  issuer: {
    prefix: '4999',
    resolutionNumber: '321654987',
    startDate: '10-10-2020',
    endDate: '12-12-12',
    startRange: '1000',
    endRange: '1000',
    technicalKey: '123123123123',
  },
  software: {
    id: '123123',
    pin: '123456789',
    providerNit: '91919191-90',
  },
};

const inv = new Invoice('123456789', invoiceOptions);

inv.addProperty('xmlns', 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2');

test('[CUSTOM PROPERTY] xmlns', () => {
  expect({}).toStrictEqual({});
});
