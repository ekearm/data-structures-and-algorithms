'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const tree = require('../tree');
const BST = require('../binarysearchtree');
const Node = require('../node');


describe('fizzBuzz(treeObj)', () => {
  let bst = new BST();

  beforeEach(() => {
    let root = new Node(15);
    let five = new Node(5);
    let twelve = new Node(12);

    root.left = five;
    root.right = twelve;
    bst.root = root;
  });

  it('should return instance of BST', () => {
    expect(bst).toBeInstanceOf(tree);
  });

  it('should change value of root.left from 5 to Fizz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.value).toBe('Fizz');
  });

  it('should change the value of root.right to Buzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.value).toBe('Buzz');
  });
  
})