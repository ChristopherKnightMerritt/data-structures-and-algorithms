'use strict';

let arrayShift = module.exports = {};

/**
 * @param  {array} arr
 * @param  {} x
 * @param  {} c
 * @returns {array}
 */
arrayShift.shift = function(arr, x, c){
    if(checkInput(arr, x, c) === null){ return null };

    let res = [];
    let mid = Math.ceil(arr.length/2)-1;

    for(let i = 0; i < arr.length; i++){
        if(i < mid){
            res[i] = arr[i];
        }
        if(i === mid){
            res[i] = arr[i];
            res[i + 1] = x;
        }
        else{
            res[i + 1] = arr[i];
        }
    }
    return res;
}
/**
 * @param  {array} a
 * @param  {} b
 * @param  {} c
 * @returns {}
 */
function checkInput(a, b, c){
    if(!Array.isArray(a)){return null;}
    if(!b){return null;}
    if(c){return null;}
}