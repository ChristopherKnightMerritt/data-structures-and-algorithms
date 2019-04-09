[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Breadth-first
Extend an existing Binary Tree, which is made up of nodes.

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
Our approach was to first create a new queue, and a new var called current, which was equal to the root of the tree. Next, we set the root to be the front of the queue. Then, we started a while loop while the queue still has values. First, dequeue the front of the queue and set that equal to current, then print that value. If the left child exists, add that to the queue. If the right child exists, add that to the queue. Repeat until the queue is empty. 

## Solution
![Whiteboard](../../assets/breadthFirst.jpg)