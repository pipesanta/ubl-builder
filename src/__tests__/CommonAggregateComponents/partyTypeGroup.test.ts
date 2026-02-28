import { Party, PartyIdentification, PartyName } from '../../ubl21/CommonAggregateComponents';

describe('CommonAggregateComponents.Party', () => {
  test('adds party name from string and serializes to JSON', () => {
    const party = new Party({} as any);
    party.addPartyName('ACME Corp');

    const json = party.parseToJson();
    expect(json['cac:PartyName']).toHaveLength(1);
    expect(json['cac:PartyName'][0]).toEqual({ 'cbc:Name': { '#text': 'ACME Corp' } });
  });

  test('adds party identification from params object', () => {
    const party = new Party({} as any);
    party.addPartyIdentification({ id: '900123456' });

    const json = party.parseToJson();
    expect(json['cac:PartyIdentification']).toEqual([{ 'cbc:ID': { '#text': '900123456' } }]);
  });

  test('accepts concrete instances in add methods', () => {
    const party = new Party({} as any);
    party.addPartyName(new PartyName({ name: 'Instance Name' }));
    party.addPartyIdentification(new PartyIdentification({ id: 'ID-1' }));

    const json = party.parseToJson();
    expect(json['cac:PartyName'][0]['cbc:Name']['#text']).toBe('Instance Name');
    expect(json['cac:PartyIdentification'][0]['cbc:ID']['#text']).toBe('ID-1');
  });

  test('throws when addPartyName receives invalid value', () => {
    const party = new Party({} as any);
    expect(() => party.addPartyName(123 as any)).toThrow('Value must be instance of PartyName or a string');
  });
});
