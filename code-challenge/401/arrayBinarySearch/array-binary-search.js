let myArr = [0,1,2,3,5,8,13,21,34,55,89,144];
let base = 0;
let peak = myArr.length - 1;
let value = 2;

function binarySearch(array, value, base, peak) {


  let midpoint = Math.floor((peak + base)/2);

  if (base > peak) {
    return -1;
  }
  else if (array[midpoint] === value){
    return value;
  }
  else if (array[midpoint] > value){
    peak = midpoint;
    binarySearch(array, value, base, peak);
  }
  else if (array[midpoint] < value){
    base = midpoint;
    binarySearch(array, value, base, peak);
  }
}

binarySearch(myArr,value,base,peak);