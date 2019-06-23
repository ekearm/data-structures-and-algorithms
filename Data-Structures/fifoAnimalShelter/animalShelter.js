'use strict';

import { isModuleDeclaration } from "@babel/types";

class AnimalShelter{
  constructor(){
    this.first = null;
    this.back = null;
  }
  
  enqueue(animalObj){
    if(animalObj.type === 'dog' || animalObj.type === 'cat'){
      if(!this.back){
        this.first = animalObj;
        this.back = animalObj;
      } else {
        this.back.next = animalObj;
        this.back = animalObj;
      }
    } else{
      return null;
    }
  }
  dequeueAny(){
    if(type == 'cat' || type === 'dog'){
      let current = this.first;
      while(type !== current.next.type){
        current.next;
      }
      let result = current.next;
      current.next = result.next;
      return result;
    }
    return null;
  }
}
module.exports = AnimalShelter;