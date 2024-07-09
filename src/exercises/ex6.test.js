// src/exercises/ex6.test.js

import { findMax, removeDuplicates, includesValue, sortArray } from './ex6';

describe('findMax', () => {
  it('should find the maximum value in an array of numbers', () => {
    expect(findMax([3, 1, 8, 4, 5])).toBe(8);
    expect(findMax([10, -5, 7, 2])).toBe(10);
    expect(findMax([-1, -2, -3])).toBe(-1);
  });

  it('should throw an error when input is not a non-empty array', () => {
    expect(() => findMax([])).toThrow('Input should be a non-empty array');
    expect(() => findMax('string')).toThrow('Input should be a non-empty array');
    expect(() => findMax({})).toThrow('Input should be a non-empty array');
    expect(() => findMax(123)).toThrow('Input should be a non-empty array');
  });
});

describe('removeDuplicates', () => {
  it('should remove duplicate values from an array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  it('should throw an error when input is not an array', () => {
    expect(() => removeDuplicates('string')).toThrow('Input should be an array');
    expect(() => removeDuplicates({})).toThrow('Input should be an array');
    expect(() => removeDuplicates(123)).toThrow('Input should be an array');
  });
});

describe('includesValue', () => {
  it('should check if an array includes a specific value', () => {
    expect(includesValue([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(includesValue(['a', 'b', 'c'], 'b')).toBe(true);
    expect(includesValue([true, false, true], false)).toBe(true);
    expect(includesValue([1, 2, 3], 4)).toBe(false);
  });

  it('should throw an error when input is not an array', () => {
    expect(() => includesValue('string', 's')).toThrow('Input should be an array');
    expect(() => includesValue({ key: 'value' }, 'key')).toThrow('Input should be an array');
    expect(() => includesValue(123, 1)).toThrow('Input should be an array');
  });
});

describe('sortArray', () => {
  it('should sort an array of numbers in ascending order', () => {
    expect(sortArray([3, 1, 4, 5, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sortArray([10, -5, 7, 2])).toEqual([-5, 2, 7, 10]);
    expect(sortArray([-1, -3, -2])).toEqual([-3, -2, -1]);
  });

  it('should throw an error when input is not an array', () => {
    expect(() => sortArray('string')).toThrow('Input should be an array');
    expect(() => sortArray({})).toThrow('Input should be an array');
    expect(() => sortArray(123)).toThrow('Input should be an array');
  });
});
