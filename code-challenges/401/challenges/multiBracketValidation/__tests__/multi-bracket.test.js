'use strict';

const balanced = require('../multi-bracket-validation.js');

describe('Multi Bracket Balance', () => {
  let tester = '[[{}()]{}]';
  it('Should return true for a balanced bracket. ()', () => {
    expect(balanced(tester)).toBeTruthy();
  });
  it('should fail for an unbalanced string', () => {
    let failer = '[[[[]){})';
    expect(balanced(failer)).toBe(false);
  });
  it('should fail for a nested string', () => {
    let failer2 = '[[[[]){})';
    expect(balanced(failer2)).toBe(false);
  });
  it('should pass if there are other charagters', () => {
    let tester2 = '([{Hi there}])';
    expect(balanced(tester2)).toBe(true);
  });
});
