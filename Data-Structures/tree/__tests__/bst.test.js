'use strict';

const BST = require('../tree.js');

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

  it('should return false when value is not found', () => {
    let bs = new BST();

    bs.root = 5;
    bs.left = 2;
    bs.right = 7;

    bs.contains(1);
    expect(false);
  });

  it('should return true when vsalue is found', () => {
    let binSerTre = new BST();

    binSerTre.root = 5;
    binSerTre.left = 2;
    binSerTre.right = 7;

    binSerTre.contains(7);
    expect(true);
  })

})