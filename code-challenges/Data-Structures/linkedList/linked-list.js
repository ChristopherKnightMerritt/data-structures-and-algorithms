'use-strict';

class Node{
  constructor(val, next= null){
    this.val = val;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  insert(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }
  includes(val){
    let curr = this.head;
    
    while(curr){
      if(curr.val === val){
        return true;
      }
      else{
        curr = curr.next;
      }
    }
    return false;
  }
  print(){
    let curr = this.head;
    let res = [];
    while(curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    return res;
  }
  append(val){
    let newNode = new Node(val);
    let curr = this.head;
    while(curr){
      if(curr.next === null){
        curr.next = newNode;
        curr=curr.next;
      }
      curr = curr.next;
    }
  }
  insertBefore(val, newVal){
    let curr = this.head;
    if(this.head.val === val){
      console.log('first');
      let newNode = new Node(newVal, curr);
      this.head = newNode;
      //curr = curr.next;
    }
    while(curr.next){
      if( curr.next.val === val){
        let newNode = new Node(newVal, curr.next);
        curr.next = newNode;
        curr = curr.next;
      }
      curr = curr.next;
    }
  }
  insertAfter(val, newVal){
    let curr = this.head;
    while(curr){
      if(curr.val === val){
        let newNode = new Node(newVal, curr.next);
        curr.next = newNode;
      }
      curr = curr.next;
    }
  }
}

module.exports = {Node, LinkedList};