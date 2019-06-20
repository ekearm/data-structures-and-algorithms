'use strict';

const BT = require('../tree');
const Node = require('../node');

describe('BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BT();

    let root = new Node(13);
    let seven = new Node(7);
    let five = new Node(5);
    let eleven = new Node(11);
    let nineteen = new Node(19);


    tree.root = root;
    root.left = seven;
    root.right = nineteen;
    root.left.left = five;
    root.left.right = eleven;
  });

  it ('should be a tree', () => {
    expect(tree).toBeInstanceOf(BT);
  });
  //Cant get it working
  
  it('should console log', () => {
    let spy = jest.spyOn(console, 'log');
    tree.breadthFirst(tree);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should not modify the tree', () => {
    let root = tree.root;

    expect(root.value).toBe(13);
    expect(root.left.value).toBe(7);
    expect(root.right.value).toBe(19);
    expect(root.left.left.value).toBe(5);
    expect(root.left.right.value).toBe(11);
  });

  it('should return the maximum value', () => {
    let result = tree.findMaximumValue(tree);

    expect(result).toBe(19);
  });

});
