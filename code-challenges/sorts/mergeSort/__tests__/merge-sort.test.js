'use strict';

let {mergeSort} = require('../merge-sort.js');

describe('Merge Sort', () => {
  it('Should sort an array.', () => {
    let arr = [5,4,3,2,1];
    expect(mergeSort(arr)).toEqual([1,2,3,4,5]);
  });
});