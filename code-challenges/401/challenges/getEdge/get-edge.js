'use strict';

module.exports = (arr, graph) => {
  if(!arr || !graph){return null;}
  let cost = 0;

  let flag = true;
  for(let i = 0; i < arr.length-1; i++){
    if(flag === true){
      graph.getNeighbors(arr[i]).forEach(item => {
        console.log('item: ', item);
        if(item.vertex === arr[i+1]){
          console.log('match found');
          cost+= item.weight;
        }
      });
    }
    else{
      flag === false;
    }
  }
  return [flag, cost];
};
 