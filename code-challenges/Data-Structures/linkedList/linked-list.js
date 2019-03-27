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
  findFromEnd(k){
    if(k === 1 || this.head.next === null){
      return null;
    }
    if(this.head !== null){
      let container1 = this.head;
      let container2 = this.head;
      let counter = 0;
      while(container1){
        if(counter<k){
          container1 = container1.next;
          counter ++;
        }
        else{
          container2 = container2.next;
          container1 = container1.next;
        }
      }
      if(counter < k){
        return null;
      }
      else{
        return container2.val;
      }
    }
  }
}

module.exports = {Node, LinkedList};

let ll = new LinkedList;

ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

console.log(ll.print());

console.log(ll.findFromEnd(4));