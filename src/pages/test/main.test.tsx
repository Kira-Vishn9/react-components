import JSONFILE from '../../../cards.json';

describe('Home', () => {
  test('Проверка на количество, Карточек', () => {
    const count = Object.keys(JSONFILE).length;
    expect(count).toEqual(4);
  });
});
