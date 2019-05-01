'use strict';

let {Hashtable} = require('../../../../Data-Structures/hashtable/hashtable.js');
let leftJoin = require('../left-join.js');

describe('Hashtable Left Join',  () => {
  let ht1 = new Hashtable(1024);
  let ht2 = new Hashtable(1024);

  ht1.add('fond', 'enamored');
  ht1.add('wrath', 'anger');
  ht1.add('diligent', 'employed');

  ht2.add('fond', 'averse');
  ht2.add('wrath', 'delight');
  ht2.add('flow', 'jam');


  it('Should return the first array with the matching key values from the second array.', () => {
    let htExpected = new Hashtable(1024);

    htExpected.add('fond', 'enamored');
    htExpected.add('wrath', 'anger');
    htExpected.add('diligent', 'employed');
    htExpected.add('fond', 'averse');
    htExpected.add('wrath', 'delight');

    htExpected.map.forEach(item => {
      console.log(Object.keys(item.head.val)[0]);
    });



    expect(leftJoin(ht1,ht2)).toEqual(htExpected);
  });
  it('Should return null if given only a left table', () => {
    expect(leftJoin(ht1)).toEqual(null);
  });
  it('Should return the left table if given an empty right table', () => {
    let emptyTable = new Hashtable(1024);
    expect(leftJoin(ht1, emptyTable)).toEqual(ht1);
  });
});