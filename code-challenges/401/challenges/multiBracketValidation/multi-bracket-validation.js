'use strict';

const stk = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

let balancedBracket = (str) => {
  let s = new stk.Stack;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === '{' || str.charAt(i) === '(' || str.charAt(i) === '['){
      s.push(str.charAt(i));
    }
    else if( str.charAt(i) === '}' || str.charAt(i) === ')' || str.charAt(i) === ']'){
      if(s.top === '{'){
        if(str.charAt(i) !== '}'){ return false;}
      }
      else if(s.top === '['){
        if(str.charAt(i) !== ']'){return false;}
      }
      else if(s.top === '('){
        if(str.charAt(i) !== ')'){return false;}
      }
      else {
        s.top = s.top.next; 
      }
    }
  }
  if(s.top != null){
    return false;
  }
  else return true;
};

let str = '{[[]]{}}';

console.log(balancedBracket(str));



module.exports = balancedBracket;