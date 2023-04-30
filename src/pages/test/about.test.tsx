import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../About';

describe('About component', () => {
  test('renders the component with a navigation bar', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText(/Здесь должна быть информация о нас/)).toBeInTheDocument();
    expect(screen.getByText(/Мы самураи у которых нет цели, но есть путь/)).toBeInTheDocument();
  });
});
