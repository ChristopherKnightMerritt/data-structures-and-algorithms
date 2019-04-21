'use strict';

let insertionSort = require('../insertion-sort.js');
let arr = [4,3,1,8,5,7,2];

let randomArr= () => {
  let arr = [];
  for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random()*100));
  }
  return arr;
};

describe('Insertion sort', ()=> {
  it('Should sort a randomly generated array', () => {
    let b = randomArr();
    expect(insertionSort(b)).toEqual(b.sort());
  });
  it('A sorted array should return the same sorted array.', ()=> {
    let newArr = insertionSort(arr);
    expect(newArr).toEqual(arr);
  });
  it('A backwards-sorted array returns the array sorted.', ()=> {
    let backwardsArr = [10,9,8,7,6,5,4,3,2,1];
    expect(insertionSort(backwardsArr)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
  it('An empty array returns the same empty array', ()=> {
    let empty = [];
    expect(insertionSort(empty)).toEqual([]);
  });
  it('An array of one returns the same single element array.', ()=> {
    let oneArr = [1];
    expect(insertionSort(oneArr)).toEqual([1]);
  });

});
