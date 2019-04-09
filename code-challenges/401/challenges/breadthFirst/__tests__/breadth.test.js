'use strict';

let Tree = require('../../../../Data-Structures/tree/tree.js').BinarySearchTree;
let breadth = require('../breadthFirst.js');


describe('Breadth First', ()=> {
  let spy = jest.spyOn(global.console, 'log').mockImplementation( ()=> {});
  let t = new Tree;
  
  it('Should not log anything if the tree is empty', ()=> {
    breadth.breadthFirst(t);
    expect(spy).not.toHaveBeenCalled();
  });
  it('Console log the first node in the tree.', () => {
    t.add(1);
    breadth.breadthFirst(t);
    expect(spy).toHaveBeenCalledWith(1);
    spy.mockClear();
  });
  it('Console log the all nodes in the tree, breadth first.', () => {
    t.add(2);
    t.add(3);
    breadth.breadthFirst(t);
    expect(spy).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(2);
    expect(spy).toHaveBeenCalledWith(3);
    spy.mockClear();
  });
});
