import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyInput from '../MyInput';

describe('MyInput', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('renders an input with a placeholder', () => {
    const { getByPlaceholderText } = render(<MyInput />);
    const input = getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('saves the value to localStorage when the component unmounts', () => {
    const { unmount } = render(<MyInput />);
    fireEvent.change(document.querySelector('input')!, { target: { value: 'new value' } });
    unmount();
    expect(localStorage.getItem('key')).toBe('new value');
  });
});
