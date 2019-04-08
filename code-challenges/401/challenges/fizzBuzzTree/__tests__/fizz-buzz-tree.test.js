'use strict';

let tree = require('../../../../Data-Structures/tree/tree.js');
let fbTree = require('../fizz-buzz-tree.js');


describe('Fizz Buzz Tree', () => {
  let testTree = new tree.BinarySearchTree;
  
  testTree.add(3);
  testTree.add(2);
  testTree.add(3);
  testTree.add(4);
  testTree.add(5);
  testTree.add(10);
  testTree.add(15);
  testTree.add(16);


  fbTree.fizzBuzzTree(testTree.root);
  it('Works as expected', () => {
    expect(testTree.preOrder(testTree.root)).toEqual([ 'Fizz', 2, 'Fizz', 4, 'Buzz', 'Buzz', 'FizzBuzz', 16 ]);
  });
  it('if there are no values that are fizz buzz or fizzbuzz, it should return the original value.', () => {
    let boringTree = new tree.BinarySearchTree;
    boringTree.add(1);
    boringTree.add(2);
    boringTree.add(4);
    let aBoringTree = boringTree;
    fbTree.fizzBuzzTree(boringTree.root);
    expect(aBoringTree.preOrder(aBoringTree.root)).toEqual(boringTree.preOrder(boringTree.root));
  });
  it('Should return null if there is an empty tree', () => {
    let nullTree = new tree.BinarySearchTree;
    fbTree.fizzBuzzTree(nullTree);
    expect(nullTree.root).toBeNull();
  });

});