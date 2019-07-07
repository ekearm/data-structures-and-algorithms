'use strict';

const HashTable =  require('../hashtable').HashTable;
const LinkedList =  require('../hashtable').LinkedList;

describe('linked list', () => {
  it('should create an empty instance of a linked list', () => {
    let ll = new LinkedList;
    expect(ll).toBeInstanceOf(LinkedList);
  });
});
