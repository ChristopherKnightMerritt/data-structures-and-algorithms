'use strict';

class Node {
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(value) {
    let val = new Node(value);
    val.next = this.top;
    this.top = val;
  }
  pop(){
    let v = this.top.val;
    this.top = this.top.next;
    return v;
  }
  peek(){
    return this.top.val;
  }
}

class Queue {
  constructor(){
    this.front = null;
  }
  enqueue(value){
    let n = new Node(value);
    if(!this.front){
      this.front = n;
    }
    else{
      let b = this.front;
      while(b.next){
        b= b.next;
      }
      b.next = n;
    }
  }
  dequeue(){
    
    let n = this.front.val;
    this.front = this.front.next;
    return n;
  }
  peek(){
    return this.front.val;
  }
}

module.exports = {Node, Stack, Queue};