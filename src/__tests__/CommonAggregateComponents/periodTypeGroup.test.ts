import { PeriodType } from '../../ubl21/CommonAggregateComponents';

describe('CommonAggregateComponents.PeriodType', () => {
  test('serializes start and end dates from object payload', () => {
    const period = new PeriodType({
      startDate: '2024-12-19',
      endDate: '2025-01-19',
    });

    const json = period.parseToJson();

    expect(json['cbc:StartDate']['#text']).toBe('2024-12-19');
    expect(json['cbc:EndDate']['#text']).toBe('2025-01-19');
  });

  test('supports fluent nested setters for dates', () => {
    const period = new PeriodType({});

    const result = period.setStartDate('2024-12-19').setEndDate('2025-01-19');
    const json = period.parseToJson();

    expect(result).toBe(period);
    expect(json['cbc:StartDate']['#text']).toBe('2024-12-19');
    expect(json['cbc:EndDate']['#text']).toBe('2025-01-19');
  });

  test('supports addStartDate/addEndDate aliases', () => {
    const period = new PeriodType({});

    period.addStartDate('2024-12-19').addEndDate('2025-01-19');

    const xml = period.getAsXml(false, false);
    expect(xml).toContain('<cbc:StartDate>2024-12-19</cbc:StartDate>');
    expect(xml).toContain('<cbc:EndDate>2025-01-19</cbc:EndDate>');
  });
});
