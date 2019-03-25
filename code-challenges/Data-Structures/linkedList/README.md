

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

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created a class for Node and for LinkedList.
The Node class had the properties 'val', the current value of the node, and 'next', a pointer to the next node.
The LinkedList class had the property 'head', which is null at instantiation, and the three functions described above.
Insert runs at O(1), includes runs at O(n), and print runs at O(n).
