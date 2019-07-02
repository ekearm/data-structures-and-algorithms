'use strict';
//PsuedoCode
/*
    InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
*/

function insertionInsert(arrayOfNumbers) {
  if(arr.some(isNaN)){
    throw new Error('Not all elements are numbers');
  }
  for(let i = 0; i <= arrayOfNumbers.length; i++){
    let j = i - 1;
    let temp = arrayOfNumbers[i];
    while(j >= 0 && temp < arrayOfNumbers[j]){
      arrayOfNumbers[j + 1] = arrayOfNumbers[j];
      j = j -1;
    }
    arrayOfNumbers[j + 1] = temp;
  }
}