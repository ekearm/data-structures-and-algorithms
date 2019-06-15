'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor(node) {
    this.root = node;
  }

  preOrder(){
    et results = [];

    let _walk = node => {
      // Ro L R
      //Ro
        results.push(node.value);
      //Left
      if(node.left) _walk(node.left);
      //right
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
    let results = [];

    let _walk = node => {
      //L Ro R
      //Left
      if(node.left) _walk(node.left);
      //Ro
      results.push(node.value);
      //right
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
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
}