'use strict';

let getEdge = require('../get-edge.js');
let { Graph } = require('../../../../Data-Structures/graph/graph.js');

describe('Get edges', () => {
  let graph = new Graph;
  let a = graph.addNode('WA');
  let b = graph.addNode('CA');
  let c = graph.addNode('ID');
  let d = graph.addNode('OR');
  graph.addUndirectedEdge(a,b, 50);
  graph.addUndirectedEdge(b,c, 100);
  graph.addUndirectedEdge(a,d, 70);
  graph.addUndirectedEdge(d,c, 30);

  it('Should return if the trip is possible and the cost.', () => {
    expect(getEdge([a,b,c], graph)).toEqual([true, 150]);
  });
  it('Should return null if no array is passed in.', () => {
    expect(getEdge(graph)).toEqual(null);
  });
  it('Should return false if the graph or array is not passed into the function', () => {
    expect(getEdge([a,b])).toEqual(null);
  });
});
