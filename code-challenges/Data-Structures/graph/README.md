# Graphs
A graph is a data structure that linkes nodes together and returns them with their neighbors and the weight of the connections between them

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

AddNode()
Adds a new node to the graph
Takes in the value of that node
Returns the added node
AddEdge()
Adds a new edge between two nodes in the graph
Include the ability to have a “weight”
Takes in the two nodes to be connected by the edge
Both nodes should already be in the Graph
GetNodes()
Returns all of the nodes in the graph as a collection (set, list, or similar)
GetNeighbors()
Returns a collection of nodes connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection
Size()
Returns the total number of nodes in the graph

## Approach & Efficiency
First I created a class for the vertex/node, which has a property of a value.
Next, I created a class for the edge that connects two nodes.
Then, I created the graph, which has the property of adjacencyList and size. I gave it the methods of addNode, addDirectedEdge, addUndirectedEdge, print, getNodes, and getNeighbors, and getSize.
addNode: This takes in a value, adds it to the adjacncyList, and increase the size.
addDirectedEdge: This takes in a start, end, and weight. Then, add the edges to the adjancyList and push them into a new edge.
addUndirectedEdge: Do a similar function as above, but without any direction.
Print: console.log all the keys and values in the function.
getNodes: push all the keys and values onto an array, then return the array.
getNeighbors: take in a vertex, return a new array with the adjencylist where it contains the vertex.
getSize: return the size of the graph.
