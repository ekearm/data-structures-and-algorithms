'use strict';

const BT = require('../tree');

describe('BinarySearchTree', () => {

  it ('should create an instance of a tree', () => {
    let bt = new BT();

    expect(bt).toBeDefined();
  });

  it('should postOrder', () => {
    let bt = new BT();

    bt.root = 5;
    bt.add = 3;
    bt.add = 7;

    bt.postOrder();

    expect(results.length).toBe(3);
    expect(results[0]).toBe(3);
    expect(results[1]).toBe(5);
    expect(results[2]).toBe(7);
  });

  it('should preOrder', () => {
    let b = new BT();

    b = 5;

    b.preOrder;

    expect(b.preOrder.results).toBe(5);
    // expect(b.preOrder.results[1]).toBe(3);
    // expect(b.preOrder.results[2]).toBe(7);
  });

  it('should inOrder', () => {
    let binTree = new BT();

    binTree.root = 5;
    binTree.add = 3;
    binTree.add = 7;

    binTree.inOrder();

    expect(results.length).toBe(3);
    expect(results[0]).toBe(5);
    expect(results[1]).toBe(3);
    expect(results[2]).toBe(7);
  });
});