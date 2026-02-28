import * as crypto from 'crypto';
import { SHA1, SHA256, SHA384, SHA512 } from '../../tools/shas';

describe('hash utilities', () => {
  test('SHA256 hash matches Node crypto', () => {
    const content = 'abc123';
    const expected = crypto.createHash('sha256').update(content, 'utf8').digest('hex');
    expect(new SHA256().getHash(content, 'utf8', 'hex')).toBe(expected);
  });

  test('SHA384 hash matches Node crypto', () => {
    const content = 'abc123';
    const expected = crypto.createHash('sha384').update(content, 'utf8').digest('hex');
    expect(new SHA384().getHash(content, 'utf8', 'hex')).toBe(expected);
  });

  test('SHA1 hash matches Node crypto', () => {
    const content = 'abc123';
    const expected = crypto.createHash('sha1').update(content, 'utf8').digest('base64');
    expect(new SHA1().getHash(content, 'utf8', 'base64')).toBe(expected);
  });

  test('SHA512 hash matches Node crypto', () => {
    const content = 'abc123';
    const expected = crypto.createHash('sha512').update(content, 'utf8').digest('base64');
    expect(new SHA512().getHash(content, 'utf8', 'base64')).toBe(expected);
  });

  test('algorithm name methods return non-empty URIs', () => {
    expect(new SHA256().getAlgorithmName()).toContain('http://');
    expect(new SHA384().getAlgorithmName()).toContain('http://');
    expect(new SHA1().getAlgorithmName()).toContain('http://');
    expect(new SHA512().getAlgorithmName()).toContain('http://');
  });
});
