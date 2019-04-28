[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Hashtables
A hashtable is a way to store data as a key value pair in a way that it can be quickly accessed at a later time. The key is hashed and the value is added to a linked list where that key's hash is located.

## Challenge
Implement a Hashtable with the following methods:

`add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
`get`: takes in the key and returns the value from the table.
`contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
`hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
* The add method takes in a key and a value. From there it needs to hash the key, and store the value in a new linkedList locateed in the array (map) at the value of the hashed key.

* The hash method takes in a key, then takes each character and gives it a numerical value according to the character code times 599 then the remainder of that number divided by the size of the map.

* The contains method takes in a key, and checks through the map to see if that key exists. If yes, it returns true. If no, it returns false.

* The get method takes in a key, checks if a value exists at the location of the hashed key, then returns the first value in the linkedList at that location.
