[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Insertion Sort
An insertion sort is one of the three common simple sorts.

## Challenge
Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

## Approach & Efficiency
First, iterated through the whole array starting from the second value. I then set a pointer for the first value. I set a temp variable to equal the current value. While the next value is larger than the one before it, move to the next. Otherwise, change the temp value to be the one before it.
