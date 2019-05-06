'use strict';

let { Graph } = require('../../../../Data-Structures/graph/graph.js');
let breadthFirst = require('../breadth-first.js');

describe('Graph', () => {
  
  const graph = new Graph();
  let a = graph.addNode('WA');
  let b = graph.addNode('CA');
  let c = graph.addNode('ID');
  let d = graph.addNode('OR');

  graph.addUndirectedEdge(a,b);
  graph.addUndirectedEdge(a,c);
  graph.addUndirectedEdge(b,c);
  graph.addUndirectedEdge(d,c);

  it('Should return the correct array', () => {
    expect(breadthFirst(a, graph)).toEqual(['WA', 'CA', 'ID', 'OR']);
  });
  it('Should return a single node if an island is passed through.', ()=> {
    let island = graph.addNode('Hi');
    expect(breadthFirst(island, graph)).toEqual(['Hi']);
  });
  it('Should return null if no graph is passed through', ()=> {
    expect(breadthFirst(a)).toBeNull();
  })
});
