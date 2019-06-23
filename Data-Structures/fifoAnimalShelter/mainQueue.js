'use strict';

require('./node');

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  enqueue(item){
    let n = new Node(item);
    if(this.head === null){
      this.head = n;
    }
    if(this.tail){
      this.tail.next = n;
    }
    this.tail = n;
  }

  dequeue(item){
    if(this.head === null) throw new Error('no more nodes');
    let val = this.head.data;
    this.head = this.head.next;
    if(this.head === null){
      this.last = null;
    }
    return val;
  }

  peek(){
    if(this.head === null) throw new Error('no more nodes');
    return this.head.data;
  }
  
  isEmpty(){
    return this.head === null;
  }
}

module.exports = Queue;