[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# First-in, First out Animal Shelter.
Used a node class  to make up the queue. Node classes have a property of val and a property of next.

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
First, I created a class called shelter to hold the nodes of animals. The shelter has propertys of front and back. 

The enqueue method adds a value to the queue if it is either 'dog' or 'cat'. If the queue is empty, the node goes to the front of the stack. Otherwise, the current back points to this node and this node becomes the current back.

The dequeue method first checks if the input is either a dog or a cat. Then, while the queue still has values, check if the front value is an instance of the preferred value. If it is, remove that value from the queue. If it is not, take the current front and move it to a second queue until you find the preferred value or you reach the end.

## Solution
![Whiteboard](../../assets/animalshelter.JPG)