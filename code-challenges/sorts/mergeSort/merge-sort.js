'use strict';

let mergeSort = (arr) => {
  let n = arr.length;
  
  if(n > 1){
    let mid = Math.floor(n/2);
    let b = arr.slice(0,mid);
    let c = arr.slice(mid, arr.length);

    mergeSort(b);
    mergeSort(c);

    merge(b, c, arr);
  }
  return arr;
};

let merge = (b, c, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < b.length && j < c.length){
    if (b[i] <= c[j]){
      arr[k] = b[i];
      i++;
    }
    else {
      arr[k] = c[j];
      j++;
    }
    k++;
  }
  if(i === b.length){

    c.forEach(item => {
      arr[k] = item;
      k++;
    });
  }
  else {
    b.forEach(item => {
      arr[k] = item;
      k++;
    });
  }
  return arr;
};

module.exports = {mergeSort, merge};