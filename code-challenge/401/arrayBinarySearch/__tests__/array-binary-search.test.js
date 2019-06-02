'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Array Binary Search', () => {
  let testArray = [1,3,6,8,10];
  val = 8;

  it ('can find a value in an array', () => {
    expect(binarySearch(testArray,val));
  })
})