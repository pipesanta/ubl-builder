# Ubl-builder

[![license](https://img.shields.io/npm/l/xmldom?color=blue&style=flat-square)](./LICENSE.md)


A library to create XML documents with UBL 2.1 (Universal Business Language) standard.

Online demo: <https://ubl-builder-react-demo.stackblitz.io/>


**Ubl 2.1 documentation:** <http://docs.oasis-open.org/ubl/os-UBL-2.1/UBL-2.1.html>
**Ubl 2.1 Schema documents:** <http://www.datypic.com/sc/ubl21/ss.html>

Install:
-------
> npm install ubl-builder

## Testing

Run all tests:

```bash
npm test
```

Run tests serially (useful while debugging):

```bash
npm test -- --runInBand
```

Current test suites cover:

- UDT serialization samples
- Invoice document basic flows (constructor validation, XML fields, DIAN extension generation)
- Invoice `cac:InvoicePeriod` nested tags (`cbc:StartDate` and `cbc:EndDate`)
- Utility tools (`dateFormatter`, `mathTools`, `shas`)
- Core CommonAggregateComponents (`PartyTypeGroup`, `TaxTotalTypeGroup`, `InvoiceLineTypeGroup`)

## Docs flows

- InvoicePeriod nested tags showcase: [docs/flows/invoice-period-nested-tags.md](docs/flows/invoice-period-nested-tags.md)

Recommended flow to keep improving coverage:

1. Add tests for one component/group at a time in `src/__tests__`.
2. Prefer behavior assertions (JSON/XML output and validations) over implementation details.
3. Run `npm test -- --runInBand` before publishing.

## Samples

##### How to create a Basic Document
```js
// import { Invoice } from 'ubl-builder';
const { Invoice } = require("ubl-builder");

const invoice = new Invoice('123456789', {});
invoice.addProperty('xmlns', 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2');
console.log(invoice.getXml());
```

##### Output
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<Invoice
    xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
    <cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>
    <cbc:ID>123456789</cbc:ID>
    <cbc:IssueDate>2020-09-13</cbc:IssueDate>
    <cbc:IssueTime>02:10:44-05:00</cbc:IssueTime>
</Invoice>
```






