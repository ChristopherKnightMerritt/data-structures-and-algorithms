'use strict';

const arrayShift = require('../lib/array-shift.js');

describe('array-shift.js', () => {
    it('should insert a value in the middle if the first value is an array.', () => {
        expect(arrayShift.shift([1,2,3,4], 1)).toEqual([1,2,1,3,4]);
    }),
    it('should fail with only one input', ()=> {
        expect(arrayShift.shift([1,2,3,4])).toBeNull();
    }),
    it('should fail with too many inputs', ()=> {
        expect(arrayShift.shift([1,2,3,4], 3 ,6)).toBeNull();
    })
    it('should return null if the first value is a string', () => {
        expect(arrayShift.shift("Hi",2)).toBeNull();
    }),
    it('should return null if the first value is an object', () => {
        expect(arrayShift.shift({},2)).toBeNull();
    }),
    it('should return null if the first value is a boolean', () => {
        expect(arrayShift.shift(true,2)).toBeNull();
    }),
    it('should return null if the first value is a number', () => {
        expect(arrayShift.shift(1,2)).toBeNull();
    })
});
