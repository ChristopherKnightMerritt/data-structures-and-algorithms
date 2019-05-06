'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph { 
  constructor(){
    this.adjacencyList = new Map();
    this.size = 0;
  }

  addNode(value){
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this.size++;
    return vertex;
  }
  addDirectedEdge(startVertex, endVertex, weight){
    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
  }
  addUndirectedEdge(start, end, weight){
    this.addDirectedEdge(start, end, weight);
    this.addDirectedEdge(end, start, weight);
  }
  print(){
    for(const[key, value] of
      this.adjacencyList){
      console.log(key, value);
    }
  }
  getNodes(){
    let res = [];
    for(const[key, value] of
      this.adjacencyList){
      res.push(value);
    }
    return res;
  }
  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }
  getSize(){
    return this.size;
  }
}

module.exports = { Graph };

const graph = new Graph();
let a = graph.addNode('WA');
let b = graph.addNode('CA');

graph.addUndirectedEdge(a,b);

graph.print();
console.log(graph.getNodes());
console.log(graph.getSize());