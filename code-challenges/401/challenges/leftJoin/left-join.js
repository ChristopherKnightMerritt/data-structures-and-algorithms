'use strict';

module.exports = (ht1, ht2) => {
  if(!ht1|| !ht2){return null;}
 
  ht1.map.forEach(item => {
    if(ht2.contains(Object.keys(item.head.val)[0])){
      ht1.add(Object.keys(item.head.val)[0], ht2.get(Object.keys(item.head.val)[0]));
    }
  });
  return ht1;
};
