'use strict';

let mergeSort = require('..mergeSort');

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

  

})