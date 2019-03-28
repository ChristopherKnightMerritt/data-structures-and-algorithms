/*

“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious) 

*/

'use strict';

const linkedList = require('../../linkedList/linked-list.js');
const mergeLL = require('../llMerge.js');

describe('Merge lists', () => {
  let list1 = new linkedList.LinkedList();
  let list2 = new linkedList.LinkedList();
  list1.insert(5);
  list1.insert(4);
  list1.insert(3);
  list1.insert(2);
  list1.insert(1);

  list2.insert('a');
  list2.insert('b');
  list2.insert('c');
  list2.insert('d');
  list2.insert('e');
  it('should combine the lists.', () => {
    mergeLL(list1, list2);
    expect(list1.includes('a')).toBeTruthy();
  });
});