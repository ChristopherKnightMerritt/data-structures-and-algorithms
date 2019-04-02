'use strict';

let pseudoQueue = require('../queue-with-stacks.js');
let stack = require('../../stacksAndQueues/stacks-and-queues.js');

describe('PseudoQueue tests:', () => {
  let stackA = new stack.Stack;
  stackA.push(1);
  let pQ = new pseudoQueue(stackA);
  it('should make a new pseudoQueue', ()=> {
    expect(pQ.aStack.peek()).toBe(1);
  });
});
