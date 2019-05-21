'use strict';
let myArr = [3, 77, 8, 9, 93, 47,1000, 12, 67, 1111];

let temp;
let n = myArr.length;
let i = 0;
let j = 0;

for (i = 0,j = (n-1); i < n/2; i++, j-- ){
    temp = myArr[i];
    myArr[i] = myArr[j];
    myArr[j] = temp;
  }