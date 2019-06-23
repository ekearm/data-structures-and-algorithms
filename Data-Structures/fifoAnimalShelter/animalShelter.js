'use strict';

class AnimalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  
  enqueue(item, type){
    if(["dog", "cat"].indexOf(type) == -1) return new Error("Must be a dog or cat");
    let n = new Node(item);
    if(type == "cat"){
      this.cats.add(n);
    }else{
      this.dogs.add(n);
    }
  }
  
  dequeueAny(){
    if(this.isEmpty()) throw new Error("all pets adopted");
    let oldestCat = this.cats.age();
    let oldestDog = this.dogs.age();
    /* bigger date code means, it came later, older one will have smaller date code */
    return oldestCat > oldestDog ? this.dogs.remove() : this.cats.remove();
  }
  
  dequeueCat(){
    if(this.cats.isEmpty()) throw new Erorr("no more cats");
    return this.cats.remove();
  }
  
  dequeueDog(){
    if(this.dogs.isEmpty()) throw new Erorr("no more dogs");
    return this.dogs.remove();
  }
  
  isEmpty(){
    return this.cats.isEmpty() && this.dogs.isEmpty();
  }
}