'use-strict';

const linkedList = require('../linked-list.js');

describe('linked-list.js', ()=>{
  let newLL = new linkedList.LinkedList();
  it('creates a new linked list', ()=>{
    let testLL = new linkedList.LinkedList();
    expect(testLL).toBeTruthy();
  }),
  it('inserting a value should insert it onto the list', ()=>{
    newLL.insert('test');
    expect(newLL.head.val).toBe('test');
  }),
  it('the head property should refer to the first value of the list', ()=>{
    expect(newLL.head.val).toBe('test');
  }),
  it('can insert multiple nodes into the list', ()=>{
    newLL.insert(1);
    newLL.insert(2);
    expect(newLL.print()).toEqual([2,1,'test']);
  }),
  it('should return true if a value exists on the list', ()=>{
    newLL.insert(200);
    expect(newLL.includes(200)).toBeTruthy();
  }),
  it('should return false if a value does not exist in the list', ()=>{
    expect(newLL.includes(43200)).toBe(false);
  }),
  it('should print all values within the list', ()=>{
    expect(newLL.print()).toEqual([200, 2, 1, 'test']);
  });
});
