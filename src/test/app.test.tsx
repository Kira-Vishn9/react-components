import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render the main page by default', () => {
    render(<App />);
    expect(screen.getByText(/Главная/)).toBeInTheDocument();
  });
});
