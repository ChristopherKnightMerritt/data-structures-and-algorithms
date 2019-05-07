# Find Edges
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
My approach was to loop through the input array until one less than the last value. Given the neighbors for the current value of the array, loop through that to check if the next value is within that. If it is, then add the cost of the edge to the cost value. If it is not, the trip is not possible and return false. Return the cost and true if it is possible.


## Solution
![UML](../../../assets/GetEdges.JPG)
