'use strict';

const linkedList = require('./linked-list');

// describe ('Test da liss wit Nodemon!'), () => {
//   it('it should create a list', () => {
//     let myList = new linkedList();
//     expect(list.head).toEqual(null);
//   });
// }
let list;
describe('testing my list', () => { 

  beforeEach(() => {
    list = new linkedList();
  });

  describe ('append the link list', () => {
   it ('should add an element to the end of the list.', () => {
    list.insert(6);
    list.insert(4);
    list.append(99);
    
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(6);
    expect(list.head.next.next.value).toEqual(99);
    expect (list.head.next.next.next).toEqual(null);

    });

    it ('should add multiple elements to the end of the list.', () => {
      list.insert(4);
      list.append(99);
      list.append(158);
      list.append(349);
      expect(list.head.value).toEqual(4);
      expect(list.head.next.value).toEqual(99);
      expect(list.head.next.next.value).toEqual(158);
      expect(list.head.next.next.next.value).toEqual(349);
      expect (list.head.next.next.next.next).toEqual(null);
    });
  }),

  describe ('Adds a new node before a value', () => {
    it ('insert an item in the middle of a linked list', () => {
      list.insert(4);
      list.insert(8);
      list.insert(37);
      //Want to implement
      //list.insertBefore(Math.floor(list.length/2),77);
      list.insertBefore(8,77)
      expect(list.head.value).toEqual(37);
      expect(list.head.next.value).toEqual(77);
      expect(list.head.next.next.value).toEqual(8);
      expect(list.head.next.next.next.value).toEqual(4);
      expect (list.head.next.next.next.next).toEqual(null);
    });

    it ('insert an item before the first node', () => {
      list.insert(4);
      list.insert(8);
      list.insert(37);
      list.insertBefore(37,77);
      expect(list.head.value).toEqual(77);
      expect(list.head.next.value).toEqual(37);
      expect(list.head.next.next.value).toEqual(8);
      expect(list.head.next.next.next.value).toEqual(4);
      expect (list.head.next.next.next.next).toEqual(null);
    });
  }),

  describe('Adds a new node after a value', () => {

    it ('inserts an item in the middle of a linked list', () => {
      list.insert(4);
      list.insert(8);
      list.insert(37);
      //Want to implement
      //list.insertAfter(Math.ceil(list.length/2),77);
      list.insertAfter(8,77);
      expect(list.head.value).toEqual(37);
      expect(list.head.next.value).toEqual(8);
      expect(list.head.next.next.value).toEqual(77);
      expect(list.head.next.next.next.value).toEqual(4);
      expect (list.head.next.next.next.next).toEqual(null);
    });

    it ('inserts an item at the end of a linked list', () => {
      list.insert(4);
      list.insert(8);
      list.insert(37);
      list.insertAfter(4,77);
      expect(list.head.value).toEqual(37);
      expect(list.head.next.value).toEqual(8);
      expect(list.head.next.next.value).toEqual(4);
      expect(list.head.next.next.next.value).toEqual(77);
      expect (list.head.next.next.next.next).toEqual(null);
    });
  });
  describe('nthFromEnd()', () => {

    it('Where k is greater than the length of the linked list ', () => {
      // list.insert(1);
      // list.insert(2);
      // list.insert(3);
      // list.insert(4);

      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node = {value: 1, next: node2};

      list.head = node;


      expect(() => {
        list.fromEnd(5);
      }).toThrow();
    });

    it('Where k and the length of the list are the same', () => {
      list.insert(1);

      expect(() => {
        list.fromEnd(4);
      }).toThrow();
    });

    it('Where k is not a positive integer', () => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);

      expect(() => {
        list.fromEnd(-5);
      }).toThrow();
    });

    it('Where the linked list is of a size 1', () => {
      list.insert(1);

      expect(() => {
        list.fromEnd(1);
      }).toThrow();
      expect(list.fromEnd(0)).toEqual(1);
    });

    it('"Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);

      expect(list.fromEnd(3)).toEqual(4);
    });
  });

});
