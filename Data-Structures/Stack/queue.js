'use strict';

const Node = require('./node');

class Queue{
  constructor(){
    this.front = null;
    this.tail = null;
  }

  enqueue(item){
    let node = new Node(item);
    if(this.tail === null) {
      this.front = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  dequeue(){
    this.front = this.front.next;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = Queue;
