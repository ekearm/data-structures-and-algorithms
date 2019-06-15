'use strict';

const Node = require('./node');

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

module.exports = BinaryTree;