'use strict';

const Node = require('../node');
const BST = require('../bst.js');

describe('Class binarySearchTree', () => {

  it('Can create an empty tree', () =>{
    let newTree = new BST();
    expect(newTree).toBeInstanceOf(BST);
  });

  it('Can create a new tree with a root', () => {
    let tree = new BST(23);
    expect(tree.root).toBe(23);
  });

  it('Can add a left and right child', () => {
    let root = new Node(7);
    let left = new Node(5);
    let right = new Node(11);

    let tree  = new BST(root);
    tree.add(left);
    tree.add(right);

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(11);
  });

});
describe('BinarySearchTree', () => {

  let tree = new BST();

  beforeEach(() => {
    let root = new Node(13);
    let seven = new Node(7);
    let five = new Node(5);
    let eleven = new Node(11);
    let seventeen = new Node(17);
    let nineteen = new Node(19);
    let twentythree = new Node(23);

    tree.root = root;
    root.left = seven;
    root.right = nineteen;
    root.left.left = five;
    root.left.right = eleven;
    root.right.left = seventeen;
    root.right.right = twentythree;
  });

  it ('should preorder the nodes', () => {
    let preorder = tree.preOrder();

    expect(preorder).toStrictEqual([13,7,5,11,19,17,23]);
  });

  it ('should postorder the nodes', () => {
    let postorder = tree.postOrder();

    expect(postorder).toStrictEqual([5,11,7,17,23,19,13]);
  });

  it ('should inorder the nodes', () => {
    let inorder = tree.inOrder();

    expect(inorder).toStrictEqual([5,7,11,13,17,19,23]);
  });
});
