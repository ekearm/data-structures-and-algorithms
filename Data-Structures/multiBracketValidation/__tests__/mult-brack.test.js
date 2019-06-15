'use strict';

let MBV = require('../multi-bracket-validation');
//I will call multi-bracket-validation MBV

describe('MBV', () => {
  it ('if given an empty string return false', () => {
    let input = '';
    let doer = MBV(input);
    expect(doer).toEqual(false);
  });

  it ('should return true when the boys team up', () => {
    let smoothBoys = MBV('[]');
    let roundBoys = MBV('()');
    let curlyBoys = MBV('{}');

    expect(smoothBoys).toBe(true);
    expect(roundBoys).toBe(true);
    expect(curlyBoys).toBe(true);
  });

  it('should be true no matter where the boys are', () => {
    let arrangement1 = MBV('[]{}()');
    let crazyArrangement = MBV('[{()}]');

    expect(arrangement1).toBe(true);
    expect(crazyArrangement).toBe(true);
  });
});