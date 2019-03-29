'use strict';

let Stack = require('../stacks-and-queues.js').Stack;
let Queue = require('../stacks-and-queues.js').Queue;

/*

Can successfully enqueue multiple items into a queue
Can successfully dequeue off of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue

*/


describe('Stacks', ()=> {
  let nStack = new Stack;
  it('Can successfully instantiate an empty stack', () => {
    expect(nStack.top).toBeNull();
  }),
  it('Can successfully push onto a stack', () => {
    nStack.push(1);
    expect(nStack.top.val).toEqual(1);
  }),
  it('Can successfully push multiple nodes onto a stack', () => {
    nStack.push(2);
    nStack.push(3);
    nStack.push(4);
    expect(nStack.top.val).toEqual(4);
  }),
  it('Can successfully empty a stack after multiple pops.', () => {
    nStack.pop();
    nStack.pop();
    nStack.pop();
    nStack.pop();
    expect(nStack.top).toBeNull();
  }),
  it('Can successfully peek the next item on the stack.', () => {
    nStack.push(5);
    expect(nStack.peek()).toEqual(5);
  }); 
  it('Can successfully pop off the stack', () => {
    nStack.pop();
    expect(nStack.top).toEqual(null);
  });
});


describe('Queues', () => {
  let nQueue = new Queue;

  it('Can successfully instantiate an empty queue', () => {
    expect(nQueue.front).toBeNull();
  }),
  it('Can successfully enqueue onto a queue', () => {
    nQueue.enqueue(1);
    expect(nQueue.front.val).toBe(1);
  }),
  it('Can successfully enqueue multiple items into a queue', () => {
    nQueue.enqueue(2);
    nQueue.enqueue(3);
    expect(nQueue.front.next.next.val).toBe(3);
  }),
  it('Can successfully dequeue off of a queue the expected value', () => {
    expect(nQueue.dequeue()).toBe(1);
    expect(nQueue.front.val).toBe(2);
  }),
  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(nQueue.peek()).toBe(nQueue.front.val);
  }),
  it('Can successfully empty a queue after multiple dequeues', () => {
    nQueue.dequeue();
    nQueue.dequeue();
    
    expect(nQueue.front).toBeNull();
  });
});