# Lecture Notes: Insertion Sort

## Description:
An algorithm that compares the key element to previous elements in the array. If the previous elements is greater than the key element, then that previous element is moved to the next position.
___

## Approach & Efficiency
O(n). This algorithm will take as long as there are items in the array

## Is it more efficient than others? 

It depends on the situation. This would be sufficent with small data sets. However, scaling will be a differnt problem since it is O(n).

___
## Solution

### Algorithm:

Create a function called insertion sort that takes: \
An array of numbers

In a for loop create an iterator variable (i) and set it to zero and while i less then the array of numbers: 

The first item is sorted

Compare the sorted value 

Move over any item to allocate room for the item to be added

Insert the value into the correct spot

Repeat for the length of the array O(n)

### Diagram: 
[Insertion-Sort-Diagram](https://he-s3.s3.amazonaws.com/media/uploads/46bfac9.png)
### Psuedo Code:
```
InsertionSort(int[] arr)

  FOR i = 1 to arr.length
  
    int j <-- i - 1
    int temp <-- arr[i]
    
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
      
    arr[j + 1] <-- temp
```


## Readings and References
### Watch
[Video](https://www.youtube.com/watch?v=pmDnM9gUxNc)
### Read

[Article 1](https://en.wikipedia.org/wiki/Insertion_sort)

[Article 2](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)

Bookmark

[Website](https://www.geeksforgeeks.org/insertion-sort/)