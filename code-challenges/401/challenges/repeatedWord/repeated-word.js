'use strict';

let {Hashtable} = require('./../../../Data-Structures/hashtable/hashtable.js');

module.exports = (str) => {
  let ht = new Hashtable(1024);
  let arr = str.split(' ');
  for(let i =0; i< arr.length; i++){
    if(ht.contains(arr[i])){
      return arr[i];
    }
    else {
      ht.add(arr[i], i);
    }
  }
  return null;
};

