'use strict';
let {treeIntersection} = require('../tree-intersection.js');
let {BinarySearchTree} = require('../../../../Data-Structures/tree/tree.js');

describe('Tree Intersection', () => {
  let tree1 = new BinarySearchTree;
  tree1.add(1);
  tree1.add(2);
  tree1.add(3);
  tree1.add(4);

  let tree2 = new BinarySearchTree;
  tree2.add(1);
  tree2.add(2);
  tree2.add(3);
  tree2.add(4);
  it('Should return all values that are in both trees.', () => {
    expect(treeIntersection(tree1,tree2)).toEqual([1,2,3,4]);
  });
  it('Should return an empty array if there are no repeated values', ()=> {
    let tree3 = new BinarySearchTree;
    tree3.add(100);
    expect(treeIntersection(tree1, tree3)).toEqual([]);
  });
  it('Should return an empty array if either tree is empty', () => {
    let tree4 = new BinarySearchTree;
    expect(treeIntersection(tree4, tree1)).toEqual([]);
  });
});
