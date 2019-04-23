[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Merge Sort

Lecture Notes: Merge Sort
First, divide an array into two halves until you have an array of length 1. Then, re order each value into the array until it is all back into an array in the correct order. Then, it merges the two halves.

You would want to use a merge sort for a partially sorted array.

### Learning Objectives:
* Understand how a Merge Sort works.
* Be able to implement a Merge Sort.


### Lecture Flow:
* How it works:
    * To do a merge sort, you must first look at only half of your array that you want to sort (rounded down). Continue looking at only the left half until your array has only 1 value. Then, begin to merge it with the value on the right. The lesser number goes first, the higher number next. Continute to move your way back up. When the two sides you are comparing are larger than 1 value, compare the first until it is no longer the largest, then add it to the array. Otherwise, add the other until it is no longer the largest. Work your way back through until one side is completed. From there, you can simply add the remaining values to the end, as they will already be sorted.
* Walk through visualization:
    ![img](https://i.imgur.com/pl7AwWI.jpg)
* Algorithm:
    * To implement in javascript, you need to take multiple steps, including recursion & a second function to merge the two back together in the right order. 
    * The mergeSort function takes in an array and calculates the midpoint of that array (rounded down). Then, split the array into two parts at the half. Next, you need to call the function again with each part. This means the function will run essentially 'within' the function. It will continue intil it reaches the 'exit clause' then will go back and complete the function it started. After that, you can call the merge function.
    Finally, return the array.
    * The merge function takes in three arrays - the left, right, and returning array. Iterate through both the left and the right arrays. While your current iteration is not greater than the length of either, compare the current value in each array. Add the greater value to the current value of the returning array, then increment your count for at side. Repeat until you have reached the end for one value, then add whatever is left for the other side to the end. Finally, return the array.
    

### Readings and References:
* [Video](https://www.youtube.com/watch?v=JSceec-wEyw_)
* [Article1](https://stackoverflow.com/questions/29218440/when-merge-sort-is-preferred-over-quick-sort) When to use Merge Sort over Quick Sort
* [Article2](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)
* [Website](https://www.geeksforgeeks.org/merge-sort/)