'use strict';
let trees = require('../tree.js');

describe('Binary search trees', ()=> {
  let binaryTree = new trees.BinarySearchTree();

  it('Can successfully instantiate an empty tree', ()=> {
    expect(binaryTree.root).toBe(null);
  }),
  it('Can successfully instantiate a tree with a single root node', ()=> {
    binaryTree.add(5);
    expect(binaryTree.root.value).toBe(5);
  }),
  it('Can successfully add a left child and right child to a single root node', ()=> {
    binaryTree.add(3);
    binaryTree.add(7);
    expect(binaryTree.contains(3)).toBeTruthy();
    expect(binaryTree.contains(7)).toBeTruthy();
  }),
  xit('Can successfully return a collection from a preorder traversal', ()=> {
    //let node9 = new trees.Node(9);

    expect(binaryTree.preOrder(5)).toBe([3,5,7]);
  }),
  xit('Can successfully return a collection from an inorder traversal', ()=> {
    expect(binaryTree.inOrder(1)).toBe([3,5,7]);
  }),
  xit('Can successfully return a collection from an postorder traversal', ()=> {
    expect(binaryTree.postOrder(8)).toBe([3,5,7]);
  });
});
