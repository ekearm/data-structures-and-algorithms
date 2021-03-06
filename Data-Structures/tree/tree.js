'use strict';

const node = require('./node');

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
  breadthFirst(tree){
    let queue = [tree.root];
    let current = queue.shift();
    while(current){
      console.log(current);
      queue.push(current.left);
      queue.push(current.right);
      current = queue.shift();
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
  findMaximumValue(tree){
    let queue = [tree.root];
    let current = queue.shift()
    let maxValue = tree.root.value;
    while(current) {
      if(current.value > maxValue){
        maxValue = current.value;
      }
      queue.push(current.left);
      queue.push(current.right);
      current = queue.shift();
    }
    return maxValue;
  }
  
}
module.exports = BinaryTree, BinarySearchTree;
