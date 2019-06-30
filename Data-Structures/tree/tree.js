'use strict';

class Node {
  constructor(value, left,right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
} 

class BinaryTree {
  constructor(node) {
    this.root = node;
  } 

  postOrder(){

    let results = [];

    let _walk = node => {
      // L R Ro
      //Left
      if(node.left) _walk(node.left);
      //right
      if(node.right) _walk(node.right);
      //Ro
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  preOrder(){
    let results = [];

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

}

class BinarySearchTree{
  constructor(node) {
    this.root = node;
  }

  add(value) {
    if (!value){
      return 'Error';
    }
    let node = new Node(value)
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
  contains(value) {

    if(!value){
      return 'error';
    }
    let result = false;

    let walk = node => {
      if (node.value === value){
        result = true;
        return;
      }
      else if(node.left !== undefined && value < node.value){
        walk(node.left);
      }
      else if(node.right !== undefined && value > node.value){
        walk(node.right);
      }
    };
    walk(this.root);
    return result;
  }
}

module.exports = BinarySearchTree, BinaryTree, Node ;