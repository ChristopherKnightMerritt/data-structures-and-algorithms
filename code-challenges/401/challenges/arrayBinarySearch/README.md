[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Insert and shift middle index of array
Code challenge 02. 
Whiteboard completed with Joseph Wolfe.


## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
First, find the low and high end of the function. While the low end is not greater than or equal to the high end, calcualate the middle of the array by subtracting the length of your current subset then dividing it by 2. if the mid point is equal to the desired value, return the midpoint. If the mid point is greater than the desired value, then search again in the lower half of the array. Otherwise, search the greater end. If there is no match, return -1.


Pull request: https://github.com/ChristopherKnightMerritt/data-structures-and-algorithms/pull/19


## Solution
![](../../../assets/binary-searchWB.jpg)
