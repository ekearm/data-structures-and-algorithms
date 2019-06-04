'use strict';

class Node{
  constructor (value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListNode {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  insert(value){
    let newNode = new Node(value);
    if (this.head){
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
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

  append(value){
    let current = this.head;
    let newNode = new Node(value);
    while (current.next !== null){
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue){
    let current = this.head;
    let newNode = new Node(newValue);
    if(this.head.value === value){
      this.insert(newValue);
      return newValue.value;
    }else{
      while(current.next.value !== value){
        current = current.next;
      }
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
    }
  }

  insertAfter(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);
    while(current.value !== value){
      current = current.next;
    }
    let temp = current.next;
    current.next = newNode;
    current.next.next = temp;
  }
}

module.exports = exports = LinkedListNode;
