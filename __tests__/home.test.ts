// lib/utils.test.ts
import { add, multiply, capitalize, isEven } from '../lib/utils';

describe('Utility Functions', () => {
  test('add() should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('multiply() should return the product of two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-1, 5)).toBe(-5);
  });

  test('capitalize() should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
  });

  test('isEven() should check if number is even', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  });
});
