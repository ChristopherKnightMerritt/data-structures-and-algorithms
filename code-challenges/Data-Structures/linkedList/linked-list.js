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
}



//let newLL = new LinkedList();

// newLL.insert(2);
// newLL.insert(3);
// newLL.insert(4);
// newLL.insert(45);
//newLL.insert(100);
//console.log(newLL);
// newLL.print();
// console.log(newLL.includes(2));
// console.log(newLL.includes(24));

module.exports = {Node, LinkedList};