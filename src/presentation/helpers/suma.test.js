import { suma } from './suma';

describe('suma', () => {
  it('should return the sum of two numbers', () => {
    expect(suma(2, 3)).toBe(5);
    expect(suma(-1, 5)).toBe(4);
    expect(suma(0, 0)).toBe(0);
  });
});