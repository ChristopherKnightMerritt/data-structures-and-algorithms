'use strict';

let repeatedWord = require('./../repeated-word.js');

describe('Repeated Word', () => {
  it('Returns the first repeated word.', () => {
    let test = 'dog the quick brown fox jumped over the lazy dog';
    expect(repeatedWord(test)).toEqual('the');
  });
  it('Should return null if there are no repeated words', ()=> {
    let failString = 'He hello this is a text';
    expect(repeatedWord(failString)).toEqual(null);
  });
  it('Should return null if there is an empty string', ()=> {
    let emptyString = '';
    expect(repeatedWord(emptyString)).toBeNull();
  });
});