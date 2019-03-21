'use strict';

let arrayBinarySearch = module.exports = {};
/**
 * 
 * @param {} arr 
 * @param {} val 
 * 
 * @returns the location of the desired value or -1 if it does not exist.
 */

arrayBinarySearch.search = function(arr, val){
  if(checkInput(arr, val) === null){return null;}
  let high = arr.length -1;
  let low = 0;
  while(low <=high){
    let mid = Math.floor( (low+high)/2);
    if (arr[mid] > val){
      high = mid - 1;
    }
    else if(arr[mid] < val){
      low = mid + 1;
    }
    else{
      return mid;
    }
  }
  return -1;
};

function checkInput(a, b){
  if(!Array.isArray(a)){return null;}
  if(typeof b !== 'number' || !b){return null;}
}