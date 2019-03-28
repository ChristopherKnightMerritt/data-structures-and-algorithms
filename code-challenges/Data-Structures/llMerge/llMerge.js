'use strict';

const linkedList = require('../linkedList/linked-list.js');


module.exports = function mergeLists(list1, list2){
  let counter1 = list1.head;
  let counter2 = list2.head;

  while(counter1.next && counter2.next){

    let temp = counter2.next;
    counter2.next = counter1.next;
    counter1.next = counter2;
    counter1 = counter2.next;
    counter2 = temp;

  }
  if(counter1.next){
    counter1.next = counter2;
  }
  else{
    counter2.next = counter1.next;
    counter1.next = counter2;
  }

  list1 = counter1;
  return list1;
};


let list1 = new linkedList.LinkedList();
let list2 = new linkedList.LinkedList();

list1.insert(5);
list1.insert(4);
list1.insert(3);
list1.insert(2);
list1.insert(1);

list2.insert('a');
list2.insert('b');
list2.insert('c');
list2.insert('d');
list2.insert('e');

//let b = mergeLists(list1, list2);
//b.print();
//console.log('console log',b);
//b.print();
//console.log(list1);
//list1.print();