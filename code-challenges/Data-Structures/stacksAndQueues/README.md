# Stacks and Queues
* A stack is a data structure that follows first in last out concepts. It is made up of nodes that contain a value an a pointer to the next value. Adding a value to a stack puts it on top of the other values, and removing a value takes the top value off.

* A queue is a data structure made up of nodes that contain data and a pointer to the next value. Queues follow first in first out concepts. Adding a value to the queue puts it behind the value that is there in front of it. Removing a value takes off the value that has been there the longest.

## Challenge
Implement a Stack and a Queue Data Structure

#### Stack:
* Implement a stack made up of nodes that has a property of top.
* Define a method `push(val)` that inserts a node to the top of the stack.
* Define a method `pop()` that removes the top value from the stack.
* Define a method `peek()` that returns the value of the top of the stack.


#### Queue: 
* Implement a queue of nodes that has a property of front.
* Define a method `enqueue(val)` that inserts a value into the queue.
* Define a method `dequeue()` that removes a node from the front of the queue and returns the node's value.
* Define a method called `peek()` that returns the value of the node located in the front of the stack.

## Approach & Efficiency

* Stacks:
  * I created a class for a stack that has the proprty of top set to null in the constructor. 
  * The push method sets the value of the top of the stack to be the new node and the new node points to the former front of the stack.
  * The pop method creates a temp variable for the top of the stack, then sets the top to be the value nehind it, then returns the temp.
  * The peek method returns the value of the top of the stack.

* Queues:
  * I created a class for queues that has the property of front set to null in the constructor.
  * The enqueue method creates a new node with the given value. If there are currently no values in the front of the queue, the new node becomes the front. Otherwise, iterate through the queue until you reach where the node is pointing to null (the back). Set that node to point to the new node.
  * The dequeue method creates a temp var with the value of the front of the list. Then, it sets the front to be the value behind it, and returns the temp var.
  * The peek function returns the value of the front of the queue.
