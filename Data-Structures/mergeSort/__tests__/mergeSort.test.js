'use strict';

// let mergeSort = require('../mergeSort');
const mergeSort = require ('../mergeSort');

describe('the merge sort function', () => {
  it('Should sort an array with an odd amount of values', () => {
    let arr = [5, 7, 8, 4, 3, 2, 9];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([2, 3, 4, 5, 7, 8, 9]);
  });

  it('Should sort an array with an even amount of values', () => {
    let arr = [5, 7, 8, 4, 3, 2];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([2, 3, 4, 5, 7, 8]);
  });

  it('Should sort an array with 1 value', () => {
    let arr = [3];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([3]);
    expect(sorted.length).toEqual(1);
  });

  it('Should not modify the array', () => {
    let arr = [2,4,8,5,7,3];
    let sorted = mergeSort(arr);
    expect(sorted.length).toEqual(6);
    expect(sorted).toContain(5);
    expect(sorted).toContain(7);
    expect(sorted).toContain(8);
    expect(sorted).toContain(4);
    expect(sorted).toContain(3);
    expect(sorted).toContain(2);
  });
});