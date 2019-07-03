'use strict';

let mergeSort = arr => {
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
};


function merge(left, right) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;

    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}