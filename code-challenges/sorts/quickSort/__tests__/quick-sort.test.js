'use strict';

let {quickSort} = require('../quick-sort.js');

describe('Merge Sort', () => {
  xit('Should sort an array.', () => {
    let arr = [5,4,3,2,1];
    expect(quickSort(arr, 0, arr.length)).toEqual([1,2,3,4,5]);
  });
});