'use strict';

class Node {
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}

class Shelter {
  constructor(){
    this.front = null;
    this.back = null;
  }
  enqueue(value){
    if(!value === 'dog' || !value ==='cat'){
      return null;
    }
    if(this.front === null){
      let animal = new Node(value);
      this.front = animal;
      this.back = animal;
    }
    else{
      let animal = new Node(value);
      animal.next = this.back;
      this.back = animal;
    }
  }
  dequeue(pref){
    if(pref != 'dog' || pref != 'cat'){return null; }
    let b = new Shelter;
    let res = '';
    while(this.front != null){
      if(this.front === pref){
        this.front = this.front.next;
      }
      else if (b.front === null){
        b.front = this.front;
        b.back = this.front;
        res = this.front;
        this.front = this.front.next;
      }
      else{
        b.back = this.front;
        this.front = this.front.next;
      }
    }
    return res;
  }
}
module.exports = Shelter;