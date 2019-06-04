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
});
