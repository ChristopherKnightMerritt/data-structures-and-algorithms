'use strict';

let {Queue} = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

module.exports = (start, graph) => {
  if(!graph){return null;}
  let res = [];
  let q = new Queue();
  q.enqueue(start);
  res.push(start.value);
  while(q.front){
    let front = q.dequeue();
    let neighbors = graph.getNeighbors(front);
    neighbors.forEach(item => {
      if(!res.includes(item.vertex.value)){
        res.push(item.vertex.value);
        q.enqueue(item.vertex);
      }
    });
  }
  return res;
};
