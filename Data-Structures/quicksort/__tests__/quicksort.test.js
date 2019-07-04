'use strict';

const quickSort = require('../quickSort');

describe('quickSort', () => {

  it('should sort', () => {
    let testArray = [9, 10, 12, 8, 7];
    
    quickSort(testArray, 0, testArray.length - 1);
    console.log(testArray);
    expect(testArray[0]).toBe(7);
    expect(testArray[1]).toBe(8);
    expect(testArray[2]).toBe(9);
    expect(testArray[3]).toBe(10);
    expect(testArray[4]).toBe(12);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    let array = [9, 8, 'Hello!!!'];
    expect(() => {
      quickSort(array, 0, array.length - 1)(array).toThrow();
    });
  });

});