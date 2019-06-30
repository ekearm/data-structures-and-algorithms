'use strict';

let myArr = [3, 77, 8, 9, 93, 47,1000, 12, 67, 1111];

function arrayReverse (arr){
  let temp;
  let n = arr.length;
  let i = 0;
  let j = 0;

  for (i = 0,j = (n-1); i < n/2; i++, j-- ){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
arrayReverse(myArr);
