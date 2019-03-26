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

describe('linked list methods pt. 2', ()=>{
  let newLL2 = new linkedList.LinkedList();
  it('adds a node to the end of the list', ()=>{
    newLL2.insert(2);
    newLL2.insert(4);
    newLL2.append('three');
    expect(newLL2.print()).toEqual([4,2, 'three']);
  }),
  it('Can successfully add multiple nodes to the end of a linked list', () =>{
    newLL2.append('end1');
    newLL2.append('end2');
    expect(newLL2.print()).toEqual([4,2,'three', 'end1', 'end2']);
  }),
  it('Can successfully insert a node before a node located in the middle of a linked list', () =>{
    newLL2.insertBefore('three', 3);
    expect(newLL2.print()).toEqual([4,2,3,'three', 'end1', 'end2']);
  }),
  it('Can successfully insert a node before the first node of a linked list', () =>{
    newLL2.insertBefore(4, 'first');
    expect(newLL2.print()).toEqual(['first', 4, 2, 3, 'three', 'end1', 'end2']);
  }),
  it('Can successfully insert after a node in the middle of the linked list', () =>{
    newLL2.insertAfter('three', 9);
    expect(newLL2.print()).toEqual(['first', 4, 2, 3, 'three', 9, 'end1', 'end2']);
  }),
  it('Can successfully insert a node after the last node of the linked list', () =>{
    newLL2.insertAfter('end2', 0);
    expect(newLL2.print()).toEqual(['first', 4, 2, 3, 'three', 9, 'end1', 'end2', 0]);
    expect().toEqual();
  });
});
