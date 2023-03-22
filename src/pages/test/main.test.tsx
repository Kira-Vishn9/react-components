import React from 'react';
import { getCards } from '../Main';

describe('getCards', () => {
  it('should return an array of React elements', () => {
    const cards = getCards();
    expect(Array.isArray(cards)).toBe(true);
    cards.forEach((card) => expect(React.isValidElement(card)).toBe(true));
  });
});
