'use strict';

const BT = require('../binarytree');

describe('BinarySearchTree', () => {

  it ('should create an instance of a tree', () => {
    let bt = new BT();

    expect(bt).toBeDefined();
  });

  it('should postOrder', () => {
    let bt = new BT();

    bt.root = 5;
    bt.root.left = 3;
    bt.root.right = 7;

    bt.postOrder();

    expect(results.length).toBe(3);
    expect(results[0]).toBe(3);
    expect(results[1]).toBe(5);
    expect(results[2]).toBe(7);
  });

  it('should preOrder', () => {
    let b = new BT();

    b.root = 5;
    b.root.left = 3;
    b.root.right = 7;

    b.preOrder();

    expect(results.length).toBe(3);
    expect(results[0]).toBe(5);
    expect(results[1]).toBe(3);
    expect(results[2]).toBe(7);
  });

  it('should inOrder', () => {
    let binTree = new BT();

    binTree.root = 5;
    binTree.root.left = 3;
    binTree.root.right = 7;

    binTree.inOrder();

    expect(results.length).toBe(3);
    expect(results[0]).toBe(5);
    expect(results[1]).toBe(3);
    expect(results[2]).toBe(7);
  });
});