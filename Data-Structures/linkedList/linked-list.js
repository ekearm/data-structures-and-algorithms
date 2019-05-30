'use strict';

class LinkedListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }

  insertValue(value){
    let node = new Node(value);
    node.next = this.head
    this.head = node;
    return this.head;
  }

  includesValue (value) {
    let current = this.head;
      while(current){
        if (current.value === value){
          return true;
          } else {
            current = node.next;
          }
          return false;
    }
  }
  print () {
    let current = this.head;
      while (!null) {
        current = current.next;
    }
  }
};

let myList = new LinkedListNode(567);
myList =  new LinkedListNode('Hello');
myList.includesValue(57);

console.log(myList.includesValue('World'));
