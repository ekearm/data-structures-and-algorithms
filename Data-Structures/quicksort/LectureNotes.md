# Lecture Notes: QuickSort

## Description:
 Much like the Merge Sort Algorithm the Quick Sort algorithm follows a divide and conqour method. It takes the imported array and partions it into two smaller arrays. It then recursivly sorts the two sub arrays. It is now sorted.


## Is it more efficient than others? How does it attack the problem differently?

It really varys. At its worst (if the array is unbalanced) it preforms at the same level as insertion sort. That being said at it's best it preforms at about average. So Quick sort can vary depending on the array.

## Learning Objectives
The baiscs of Quick Sort 

# Diagram
![Diagram](https://i2.wp.com/www.techiedelight.com/wp-content/uploads/Quicksort.png?fit=577%2C410&ssl=1)

# Algorithm
* Select an element from the array as pivot. (Usually the last element)
* Partition the array. One partition will contain all the elements that are less than the pivot. 
* Another partition will contain all elements that are greater than the pivot.
* Apply this procedure recursively with these two partitions.


# Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

# Readings and References
Watch</br>
[Video](https://www.youtube.com/watch?v=MZaf_9IZCrc)

Read</br>
[Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

Bookmark</br>
[Geeks for Geeks](https://www.geeksforgeeks.org/quick-sort/)