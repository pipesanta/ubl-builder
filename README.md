# Ubl-builder

[![license](https://img.shields.io/npm/l/xmldom?color=blue&style=flat-square)](./LICENSE.md)


A library to create XML documents with UBL 2.1 (Universal Business Language) standard.


**Ubl 2.1 documentation:** <http://docs.oasis-open.org/ubl/os-UBL-2.1/UBL-2.1.html>

Install:
-------
> npm install xmldom

## Samples

##### How to create a Basic Document
```js
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






