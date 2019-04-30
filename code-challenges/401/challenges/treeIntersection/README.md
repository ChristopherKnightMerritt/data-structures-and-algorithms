[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Intersection of binary trees
A binary tree is a data structure made up of nodes that have a left and a right child. 

## Challenge
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
First, create a new hashtable and a new array to hold the duplicates. Run a preOrder traversal on the root of both trees and save those values in an array. Add each value in the array to the hash table then check the second array. If the value exists in the array already, then add it to the results array. Return the results array.

## Solution

![Whiteboard](../../assets/binarytree-intersection-whiteboard.JPG)
