'use strict';

let stack = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor(aStack){
    this.aStack = aStack;
    this.bStack = new stack.Stack;
  }
  enqueue(value){
    while(this.aStack.peek()){
      this.bStack.push(this.aStack.pop());
    }
    this.aStack.push(value);
    while(this.bStack.peek()){
      this.aStack.push(this.bStack.pop());
    }
  }
  dequeue(){
    while(this.aStack.next.peek()){
      this.bStack.push(this.aStack.pop());
    }
    this.aStack.pop();
    while(this.bStack.peek()){
      this.aStack.push(this.bStack.pop());
    }
  }
}

module.exports = PseudoQueue; 
