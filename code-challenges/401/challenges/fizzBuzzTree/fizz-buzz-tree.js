'use strict';

let fizzBuzzTree = (node) => {
  if(node){
    if(node.value % 15 === 0){
      node.value = 'FizzBuzz';
    }
    else if(node.value % 5 === 0){
      node.value = 'Buzz';
    }
    else if(node.value % 3 === 0){
      node.value = 'Fizz';
    }
    if(node.left !== null){
      fizzBuzzTree(node.left);
    }
    else if(node.right !== null){
      fizzBuzzTree(node.right);
    }
  }
  return;
};

module.exports = {fizzBuzzTree};
