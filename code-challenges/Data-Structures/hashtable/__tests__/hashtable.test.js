'use strict';

let {Hashtable} = require('../hashtable.js');

let ht = new Hashtable(1024);

describe('Hash Table', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure',  () => {
    ht.add('Chris', 'Student');
    expect(ht.contains('Chris')).toBeTruthy();
  });
  it('Retrieving based on a key returns the value stored',  () => {
    expect(ht.get('Chris')).toEqual('Student');
  });
  it('Successfully returns null for a key that does not exist in the hashtable',  () => {
    expect(ht.get('hi')).toBeNull();
  });
  it('Successfully handle a collision within the hashtable',  () => {
    ht.add('Chris', 'Student');
    expect(ht.contains('Chris')).toBeTruthy();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',  () => {
    expect(ht.get('Chris')).toEqual('Student');
  });
});