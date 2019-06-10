'use strict';

const Stack = require('../stack');

describe('Stack and Queues', () => {

  let stack;

  describe('Name of the group', () => {

    beforeEach(() => {
      stack = new Stack();
    });


    it('Can successfully push onto a stack', () => {
      stack.push(5);
      expect(stack.top.value).toBe(5);
    });

    it('Can successfully push multiple nodes onto a stack', () => {
      stack.push(4);
      stack.push(5);
      stack.push(6);
      stack.push(7);
      expect(stack.top.value).toBe(7);
    });

    it('Can successfully pop off the stack', () => {
      stack.push(4);
      stack.push(5);
      stack.pop();
      expect(stack.top.value).toBe(4);
    });

    it('Can successfully empty a stack after multiple pops', () => {
      stack.push(4);
      stack.push(5);
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull();
    });

    it('Can successfully peek the next item on the stack.', () => {
      stack.push(4);
      stack.push(5);
      expect(stack.peek()).toBe(5);
    });

    it('Can successfully instantiate an empty stack', () => {
      expect(stack).toBeInstanceOf(Stack);
      expect(stack.peek()).toBeNull();
    });
  });
});