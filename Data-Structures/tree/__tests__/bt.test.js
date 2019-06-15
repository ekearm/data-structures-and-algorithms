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
    bt.left = 2;
    bt.right = 7;

    bt.root.left.right = 3;
    bt.left.left = 1;
    bt.right.left = 6;
    bt.right.right = 9;

    bt.postOrder();
    expect(results.length).toBe(7);
    expect(results[0]).toBe(1);
  })

});