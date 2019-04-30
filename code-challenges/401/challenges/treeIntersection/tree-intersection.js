'use strict';

let {Hashtable} = require('./../../../Data-Structures/hashtable/hashtable.js');

let treeIntersection = (tree1, tree2) => {
  let res = [];
  let ht = new Hashtable(1024);
  let arr1 = [];
  let arr2 = [];
  tree1.preOrder(tree1.root, arr1);
  tree2.preOrder(tree2.root, arr2);
  arr1.forEach(item => {
    ht.add(item.toString(), item);
  });
  arr2.forEach(item => {
    if (!ht.contains(item.toString())){
      ht.add(item.toString(), item);
    }
    else{
      res.push(item);
    }
  });
  return res;
};

module.exports = {treeIntersection};