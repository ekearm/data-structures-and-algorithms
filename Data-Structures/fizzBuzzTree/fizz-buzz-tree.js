'use strict';

require('./tree');

module.exports = (treeObj) => {
  let node = treeObj.root;

  let _walk = node => {
    if(node.value % 15 === 0){
      node.value = 'FizzBuzz';
    } else if (node.value % 5) {
      node.value = 'Buzz';
    } else if(node.value % 3){
      node.value = 'Fizz';
    }

    if(node.left) _walk(node.left);
    
    if(node.right) _walk(node.right);
  };
  _walk(node);

  return treeObj;
};