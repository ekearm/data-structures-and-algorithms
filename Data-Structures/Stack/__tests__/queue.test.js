'use strict';

const Queue = require('../queue');

describe('Queues', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('Can successfully enqueue onto a queue', () => {
    queue.enqueue(5);
    expect(queue.front.value).toBe(5);
  });


  it('Can successfully enqueue multiple items into a queue', () => {
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    expect(queue.front.next.next.value).toBe(7);
  });


  it('Can successfully dequeue off of a queue the expected value', () => {
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    expect(queue.front.value).toBe(6);
  });


  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.peek()).toBe(5);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  it('Can successfully instantiate an empty queue', () => {
    expect(queue).toBeInstanceOf(Queue);

  });

});