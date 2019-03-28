# Merge two Linked Lists
Can be used with the existing linked list class.

## Challenge
Merge two linked lists.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took was to iterate through the lists. I created a temp var of the next value in the second list, then set the next value of the first list to equal the next value of the first list. I then set the next value of the second list to equal the temp value from the original first list. 

In two lists, 
    A -> B -> C -> null
    1 -> 2 -> 3 -> null

After one iteration we would have: 
    A -> 1 -> B -> C -> null
         2 -> 3 -> null

Then repeat the process until either list reaches null. Then set the pointer of the last node of the list to the remaining values for whichever list is left.

## Solution
![IMG3](../../assets/linkedlistmerge.JPG)