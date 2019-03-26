[![Build Status](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/ChristopherKnightMerritt/data-structures-and-algorithms)

# Singly Linked List
A linked list is used to store a value then point to the next value in the list. At the end, it points to null.

## Challenge
The challenge was to create a linked list class from scratch. It contains nodes and can run three functions: 
-insert(val):
    This function inserts a value at the head of the list then points to the previous head.
-includes(val):
    This function reads through the list and returns true if the value exists in the list. Otherwise, it returns false.
-print():
    This function returns an array of each value in the linked list.
-append(val):
    Inserts a new node at the end of the list.
-insertBefore(val, newVal){
    Inserts a new node before the specified value.
}
-insertAfter(val, newVal){
    Inserts a new node after the specified value.
}

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created a class for Node and for LinkedList.
The Node class had the properties 'val', the current value of the node, and 'next', a pointer to the next node.
The LinkedList class had the property 'head', which is null at instantiation, and the three functions described above.
Insert runs at O(1), includes runs at O(n), and print runs at O(n).

-----Part II------
1. Append:
    The approach was to find where the next value was equal to null, then set the pointer to equal a new node, and have that one point to null.
    Big O: O(n)
2. Insert Before:
    The approach was to find either if the first value or the next value was equal to the value. If that was true, then set the current node to point to a new node and that node to point to the next node.
    Big O: O(n)
3. Insert After:
    The approach was to check if the current value was equal to the replacement value. If yes, then set the current value to point to a new node, then set the new node to point to a next value.

### Whiteboard images:
[!https://github.com/ChristopherKnightMerritt/data-structures-and-algorithms/blob/ll_insertions/code-challenges/assets/linkedlist2pt1.jpg]

[!https://github.com/ChristopherKnightMerritt/data-structures-and-algorithms/blob/ll_insertions/code-challenges/assets/linkedlist2pt2.jpg]