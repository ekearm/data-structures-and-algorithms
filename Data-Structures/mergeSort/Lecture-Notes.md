# Lecture Notes: Insertion Sort

## Description:
An algorithm that goes through an array by dividing and conquer. It first reduces all the elements of the array into its components and then compares each of them. 
___

## Approach & Efficiency
O(n log n). Because of the divide and conquer method. 

## Learning Objectives
To understand the basics of the Merge Sort Algorithm

## Lecture Flow
* Diagram
* Example (Maybe have the class merge sort themselves by birthday)
* Algorithm
* Pseudocode
* Readings and videos


## Is it more efficient than others? 

It is more effecient then insertion sort. It also doesn't have the scaling issue that insertion did. However, it really depends on what you need merge sort can take longer to program than insertion sort. That scaling though makes it much better when you need to scale. 

___
## Solution

### Algorithm:

* Create a function called MergeSort which takes an array as a perameter
  * Divide the array in two called a left and right
  * Recursivly call the Mergesort until the array is completly divided into indivduals
  * Call the helper merge function for each left and right element
* Create a helper function called merge which takes a left value and a right value
  * Declare an empty array
  * Declare a left and right index
  * while the left index does not equal the length of the left left and the right index does not equal the length of the right
    * check which value is greater left value or right value
      * Which ever is push it into the new array

### Diagram: 
[Merge-Sort](https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png)
### Psuedo Code:
```
ALGORITHM Mergesort(arr)
    DECLARE if arr.length <= 1
      is so return arr
    DECLARE a midpoint <-- arr/2
    DECLARE left <-- arr[0...mid]
    DECLARE right <-- arr[mid...n]

    CALL Merge(left, right)

ALGORITHM Merge(left, right)
    DECLARE an empty Array newArr <-- []
    DECLARE Left-i <-- 0
    DECLARE Right-i <-- 0

    while Left-i < left.length && right-i < right.length
        if Left-i < Right-i
          push Left-i into newArr
          Left-i++
        else
          push Right-i into newArr
          Right-i++
    return newArr concatenated with left and right
```


## Readings and References
### Watch
[Video](https://www.youtube.com/watch?v=4VqmGXwpLqc)
### Read

[Article 1](https://en.wikipedia.org/wiki/Merge_sort)

[Article 2](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)

Bookmark

[Website](https://www.geeksforgeeks.org/merge-sort/)