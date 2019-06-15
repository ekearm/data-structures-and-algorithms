'use strict';

const BST = require('../binarysearchtree.js');

describe('BinarySearchTree', () => {

  it ('should create a BST', () => {
    let bst = new BST();

    expect(bst).toBeDefined();
  });

  it('should add a node', () => {
    let b = new BST();
    b.add(5);
    
    expect(b.root).toEqual(5);
  });

  it('should return true when a value is found', () => {
    
  })
})