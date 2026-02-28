# InvoicePeriod nested tags showcase

This guide shows how to create nested `cac:InvoicePeriod` tags with `cbc:StartDate` and `cbc:EndDate`.

## Option 1: object payload

```ts
import { Invoice } from 'ubl-builder';

const invoice = new Invoice('123456789', options);

invoice.addInvoicePeriod({
  startDate: '2024-12-19',
  endDate: '2025-01-19',
});
```

## Option 2: nested fluent style

```ts
import { Invoice } from 'ubl-builder';

const invoice = new Invoice('123456789', options);

const period = invoice.addInvoicePeriod();
period.addStartDate('2024-12-19').addEndDate('2025-01-19');

// equivalent
period.setStartDate('2024-12-19').setEndDate('2025-01-19');
```

## Generated XML (relevant fragment)

```xml
<cac:InvoicePeriod>
  <cbc:StartDate>2024-12-19</cbc:StartDate>
  <cbc:EndDate>2025-01-19</cbc:EndDate>
</cac:InvoicePeriod>
```

## Important note

Always pass dates as strings.

- ✅ `'2024-12-19'`
- ❌ `2024-12-19` (JavaScript interprets this as subtraction)

This works the same whether your app is React 18, Node.js, or any other JavaScript runtime.
