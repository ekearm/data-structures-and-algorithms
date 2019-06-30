'use strict';

const BinaryTree = require('../tree.js');

describe('BinaryTree', () => {

  it ('should create an instance of a tree', () => {
    let bt = new BinaryTree;

    expect(bt).toBeDefined();
  });

  //   it('should postOrder', () => {
  //     let bt = new BinaryTree ;

  //     bt.root = 5;
  //     bt.add = 3;
  //     bt.add = 7;

  //     bt.postOrder;

  //     //expect(bt.results).toBe(3);
  //     expect(bt.results[0]).toBe(3);
  //     expect(bt.results[1]).toBe(5);
  //     expect(bt.results[2]).toBe(7);
  //   });

  //   it('should preOrder', () => {
  //     let b = new BinaryTree;

  //     b = 5;

  //     b.preOrder;

  //     expect(b.preOrder.results).toBe(5);
  //     // expect(b.preOrder.results[1]).toBe(3);
  //     // expect(b.preOrder.results[2]).toBe(7);
  //   });

  //   it('should inOrder', () => {
  //     let binTree = new BinaryTree;

  //     binTree.root = 5;
  //     binTree.add = 3;
  //     binTree.add = 7;

  //     binTree.inOrder();

  //     expect(results.length).toBe(3);
  //     expect(results[0]).toBe(5);
  //     expect(results[1]).toBe(3);
  //     expect(results[2]).toBe(7);
  //   });
});