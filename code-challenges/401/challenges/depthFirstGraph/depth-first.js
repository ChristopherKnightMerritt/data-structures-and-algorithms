'use strict';

let depthFirst  = (graph, root, list=[]) => {
  if(!graph || ! root){return null;}
  if(!graph.getNodes().includes(root)){return null;}
  if(root.visited === false){
    list.push(root.value);
    root.visited = true;
  }
  graph.getNeighbors(root).forEach(neighbor => {
    if(neighbor.vertex.visited === false){
      depthFirst(graph, neighbor.vertex, list);
    }
  });
  console.log(list);
  return list;
};

module.exports = depthFirst;