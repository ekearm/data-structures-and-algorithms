'use strict';

let mergeSort = require('..mergeSort');

describe('the merge sort function', () => {
  it('Should sort an array with an odd amount of values', () => {
    // arrange
    let arr = [5, 7, 8, 4, 3, 2, 9];

    // act
    let sorted = mergeSort(arr);

    // assert
    expect(sorted).toEqual([2, 3, 4, 5, 7, 8, 9]);
  });
})