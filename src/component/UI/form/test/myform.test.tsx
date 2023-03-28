import React from 'react';
import { render } from '@testing-library/react';
import MyForm from '../Myform';

describe('MyForm', () => {
  it('renders all form inputs', () => {
    const { getAllByPlaceholderText } = render(<MyForm />);
    expect(getAllByPlaceholderText('Write something')[0]).toBeVisible();
  });
});
