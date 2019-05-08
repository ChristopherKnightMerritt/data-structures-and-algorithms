'use strict';

let { Graph } = require('../../../../Data-Structures/graph/graph.js');
let depthFirst = require('../depth-first.js');

describe('Depth First Traversal', ()=> {

  const graph = new Graph();
  let a = graph.addNode('a');
  let b = graph.addNode('b');
  let c = graph.addNode('c');
  let d = graph.addNode('d');
  let e = graph.addNode('e');
  let f = graph.addNode('f');
  let g = graph.addNode('g');
  let h = graph.addNode('h');



  graph.addUndirectedEdge(a,b);
  graph.addUndirectedEdge(b,c);
  graph.addUndirectedEdge(c,g);
  graph.addUndirectedEdge(b,d);
  graph.addUndirectedEdge(d,e);
  graph.addUndirectedEdge(d,h);
  graph.addUndirectedEdge(f,h);
  graph.addUndirectedEdge(b,c);


  it('Should return the correct array', () => {
    expect(depthFirst(graph, a)).toEqual(['a','b','c', 'g', 'd', 'e','h','f']);
  });
  it('Should return null of the root does not exist in the graph' , () => {
    expect(depthFirst(graph,'hi')).toEqual(null);
  });
  it('Should return null given an incorrect input.', ()=> {
    expect(depthFirst(a)).toEqual(null);
  });
});
