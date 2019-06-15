'use strict';

const Node = require('./node');
const BT = require('./binarytree');

class BinarySearchTree extends BinaryTree{
  constructor(node) {
    this.root = node;
  }

  add(node) {
    if(!this.root){
      this.root = node;
      return node;
    }
    let currentNode = this.root;

    while(currentNode){

      if(node.value < currentNode.value){
        if(!currentNode.left){
          currentNode.right = node;
          break;
        }else {
          currentNode = currentNode.left;
        }
      }

      else if (node.value > currentNode.value){
        //Go Right
        currentNode.right = node;
      }

      else { 
        //Duplicate found
        throw new Error('Value already present');
      }

    }    
  }
  contains(node) {
    let currentNode;

    if (currentNode === undefined){
      currentNode = this.root;
    };

    if (currentNode === node){
      return true
    }
    else if (currentNode.left === !undefined && currentNode.left < node){
      currentNode = currentNode.left;
      contains(node);
    }
    else if (currentNode.right === !undefined && currentNode.left > node)
    currentNode = currentNode.right;
    contains(node);
  }

}
module.exports = BinarySearchTree;