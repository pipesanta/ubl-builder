import GenericAggregateComponent, {
  IGenericKeyValue,
  ParamsMapValues,
} from '../../ubl21/CommonAggregateComponents/GenericAggregateComponent';
import { UdtText } from '../../ubl21/types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  first: { order: 2, attributeName: 'cbc:First', min: 0, max: 1, classRef: UdtText },
  second: { order: 1, attributeName: 'cbc:Second', min: 0, max: 1, classRef: UdtText },
  notes: { order: 3, attributeName: 'cbc:Note', min: 0, max: undefined, classRef: UdtText },
};

class GenericFixture extends GenericAggregateComponent {
  constructor(content: any) {
    super(content, ParamsMap, 'cac:GenericFixture');
  }
}

describe('CommonAggregateComponents.GenericAggregateComponent', () => {
  test('rejects unknown attributes', () => {
    expect(() => new GenericFixture({ notAllowed: 'x' })).toThrow('attribute notAllowed is not allowed');
  });

  test('coerces primitive arrays into mapped class instances', () => {
    const fixture = new GenericFixture({ notes: ['n1', 'n2'] });

    const json = fixture.parseToJson();
    expect(json['cbc:Note'][0]['#text']).toBe('n1');
    expect(json['cbc:Note'][1]['#text']).toBe('n2');
  });

  test('enforces max occurrences for arrays', () => {
    expect(() => new GenericFixture({ first: ['a', 'b'] })).toThrow('first max occurrences is 1');
  });

  test('serializes according to order in params map', () => {
    const fixture = new GenericFixture({ first: 'value1', second: 'value2' });

    const json = fixture.parseToJson();
    expect(Object.keys(json)).toEqual(['cbc:Second', 'cbc:First']);
  });
});
