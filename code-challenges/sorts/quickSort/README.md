Quick Sort

The quick sort first finds a pivot point, then sorts the two partitions on either side.

Learning Objectives:
* How it works
* How to step through
* How to implement

Lecture Flow:
* Main Point:
  * Divide and conquer. First, you need to find a midpoint, where everything that is to the left is less, and everything to the right is above. This is done by comparing the first value to the last. If the first is greater than the last, swap them and point at the next value. Otherwise, point to the next value. Once the pointers are at the same spot, this should be the piviot point.
  * You should now have a left partition, where everything is less than the pivot, and a right partition, where everything is greater than the pivot. From there, complete the process until your array is sorted.

* Diagram:
![img](https://i.imgur.com/Xi0ns4y.jpg)

Pseudocode - from example:

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the Algorithm
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot
    DEFINE pivot <-- arr[right]
    // get the index of the lower value
    DEFINE low <-- left - 1

    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)
     
     Swap(arr, right, low + 1)
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
Readings and References
Watch

[Video](https://www.youtube.com/watch?v=vxENKlcs2Tw)
[Read](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

[Article 1](https://www.careercup.com/question?id=2299)
[Article 2](http://me.dt.in.th/page/Quicksort/)
[Bookmark](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/)

[Website](https://algs4.cs.princeton.edu/23quicksort/)
