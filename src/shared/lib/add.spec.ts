import { add } from '@/shared/lib';
import { describe, expect, it } from 'vitest';

describe('add function', () => {
 it('should add two positive numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
 });

 it('should add a positive and a negative number correctly', () => {
  expect(add(5, -2)).toBe(3);
 });

 it('should add two negative numbers correctly', () => {
  expect(add(-4, -6)).toBe(-10);
 });

 it('should return the same number when adding zero', () => {
  expect(add(7, 0)).toBe(7);
 });

 it('should handle large numbers correctly', () => {
  expect(add(1000000, 2000000)).toBe(3000000);
 });
});
