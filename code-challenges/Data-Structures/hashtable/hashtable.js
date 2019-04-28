'use strict';

let {LinkedList} = require('../linkedList/linked-list.js');

class Hashtable {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }
  add(key, value){
    let hash = this.hash(key);
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }
    let entry = {[key]: value};
    this.map[hash].insert(entry);
  }
  get(key){
    if(this.map[this.hash(key)]){
      return this.map[this.hash(key)].head.val[key];
    }
    else return null;
  }
  contains(key){
    if(this.map[this.hash(key)]){
      return true;
    }
    return false;
  }
  hash(key){
    return key.split('').reduce((p,n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
}

module.exports = { Hashtable};
