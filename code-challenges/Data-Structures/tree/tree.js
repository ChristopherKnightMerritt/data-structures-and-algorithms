'use strict';

class Node {
  constructor (value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  add(val){
    let current = this.root;
    let newNode = new Node(val);
    if(!current){this.root = newNode; return;}
    else{
      while(current){
        if(val < current.left){
          if(current.left === null){
            current.left = newNode;
            break;
          }
          else {
            current = current.left;
          }
  
        }
        else {
          if(current.right === null){
            current.right = newNode;
            break;
          }
          else{
            current = current.right;
          }
        }
      }
    }
  }
  contains(val){
    let current = this.root;
    while(current){
      if(current.value === val){return true;}
      if(val < current.left){current = current.left;}
      else {current = current.right;}
    }
    return false;
  }
  preOrder(node){
    let res = [];
    if(node){
      res.push(node.val);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    return res;
  }
  inOrder(node){
    let res = [];
    if(node){
      this.inOrder(node.left);
      res.push(node.value);
      this.inOrder(node.right);
    }
    return res;
  }
  postOrder(node){
    let res = [];
    if(node){
      this.postOrder(node.left);
      this.postOrder(node.right);
      res.push(node.value);
    }
    return res;
  }
}

module.exports = {BinarySearchTree, Node};

let binaryTree = new BinarySearchTree();


binaryTree.add(3);
binaryTree.add(7);

console.log(binaryTree);