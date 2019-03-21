'use strict';

const arrayBinarySearch = require('../lib/array-binary-search.js');

describe('array-binary-search', () => {
  it('Should return the index of the desired value', ()=>{
    expect(arrayBinarySearch.search([1,2,3,4,5,6], 2)).toEqual(1);
  }),
  it('Should return null if the first input is not an array', () => {
    expect(arrayBinarySearch.search(1,1)).toBeNull();
  }),
  it('Should fail without a second input', () => {
    expect(arrayBinarySearch.search([1,2,3])).toBeNull();
  }),
  it('Should fail if the second input is not a number', () => {
    expect(arrayBinarySearch.search([1,2,3], 'hi')).toBeNull();
  });
});