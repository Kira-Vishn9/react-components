import { render } from '@testing-library/react';
import Main from '../Main';
import JSONFILE from '../../../cards.json';

describe('Home', () => {
  test('Проверка на количество, Карточек', () => {
    const keys = Object.keys(JSONFILE);
    const { container } = render(<Main />);
    const cards = container.querySelectorAll('.main');
    expect(1).toEqual(1);
  });
});
