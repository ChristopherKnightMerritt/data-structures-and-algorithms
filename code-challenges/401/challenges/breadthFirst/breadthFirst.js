'use strict';

let Queue = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js').Queue;

let breadthFirst = (tree) => {
  if(tree.root){
    let queue = new Queue;
    let current = tree.root;
    queue.enqueue(current);
    while(queue.front !== null){
      current = queue.dequeue();
      console.log(current.value);
      if(current.left){queue.enqueue(current.left);}
      if(current.right){queue.enqueue(current.right);}
    }
  }
  else{return null;}
};

module.exports = {breadthFirst};
