import { render, screen, fireEvent } from '@testing-library/react';
import MyInput from '../MyInput';

describe('MyInput', () => {
  it('should load saved input value from localStorage on mount', () => {
    localStorage.setItem('key', 'saved value');
    const mockCallback = (arg: string) => {};
    render(<MyInput callback={mockCallback} />);

    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toHaveValue('saved value');
  });

  it('should save input value to localStorage on change', () => {
    const mockCallback = (arg: string) => {};
    render(<MyInput callback={mockCallback} />);

    const inputElement = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(localStorage.getItem('key')).toEqual('test');
  });
});
