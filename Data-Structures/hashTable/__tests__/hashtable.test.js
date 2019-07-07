'use strict';

const HashTable =  require('../hashtable').HashTable;
const LinkedList =  require('../hashtable').LinkedList;

describe('linked list', () => {
  it('should create an empty instance of a linked list', () => {
    let ll = new LinkedList;
    expect(ll).toBeInstanceOf(LinkedList);
  });
});
describe('hashtable table', () => {
  it('should create an empty instance of a hashtable', () => {
    let hashTable;
    let expectedSize = 10;
    hashTable = new HashTable(expectedSize);
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets.length).toBe(expectedSize);

  });

});
