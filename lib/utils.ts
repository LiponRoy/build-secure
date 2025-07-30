 // lib/utils.ts

export const add = (a: number, b: number): number => a + b;

export const multiply = (a: number, b: number): number => a * b;

export const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const isEven = (num: number): boolean => num % 2 === 0;
