'use strict';

import { isModuleDeclaration } from "@babel/types";

//Import Stack
function multiGrouperValidation (input) {
  let theBoys = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }

  let theOpening = Object.values(theBoys);
  let theClosing = Object.keys(theBoys);
 

  let groupersStack = new Stack;
  let i;

  for (i = 0; i < input.length; i++){
    if (theOpening.includes(i)){
      groupersStack.push(i);
    } else if (theBoys[i]){
      let currentBoy = groupersStack.peek();
      if (theBoys[i] === currentBoy){
        groupersStack.pop();
      } else {
        return false
      }
    }
  }
  if(groupersStack.size === 0){
    return true
  } else {
    return false;
  }

}

module.exports = multiGrouperValidation