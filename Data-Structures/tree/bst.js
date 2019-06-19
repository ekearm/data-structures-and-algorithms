'use strict';

BinaryTree = require('./tree');

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
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
          currentNode.left = node;
          break;
        }else {
          currentNode = currentNode.left;
        }
      }

      else if (node.value > currentNode.value){
        //Go Right
        if(!currentNode.right){
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
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
    else if (currentNode.right === !undefined && currentNode.right > node){
    currentNode = currentNode.right;
    contains(node);
    }
    else{
      return false;
    }
  }

}

module.exports = BinarySearchTree;