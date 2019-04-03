'use strict';

const shelter = require('../fifo-animal-shelter.js');

describe('FIFO animal shelter:', () => {
  let animalShelter = new shelter;
  animalShelter.enqueue('dog');
  it('should make a queue', () => {
    expect(animalShelter.front.val).toBe('dog');
  }),
  it('should add a value to the back.', () => {
    animalShelter.enqueue('cat');
    expect(animalShelter.back.val).toBe('cat');
  });
});