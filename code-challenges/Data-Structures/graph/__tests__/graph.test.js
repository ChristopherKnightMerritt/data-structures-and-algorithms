'use strict';

let { Graph } = require('../graph.js');

describe('Graphs', () => {
  let g = new Graph;
  let a = g.addNode('Hi', 1);
  let b = g.addNode('Hello', 3);
  g.addUndirectedEdge(a,b);
  it('Node can be successfully added to the graph', () => {
    expect(g.getSize()).toEqual(2);
  });
  it('An empty graph properly returns null', ()=> {
    let k = new Graph;
    expect(k.map).toEqual(undefined);
  });
});