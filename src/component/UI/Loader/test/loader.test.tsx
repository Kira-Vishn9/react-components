import React from 'react';
import { render } from '@testing-library/react';
import MyLoader from '../MyLoader';

describe('MyLoader', () => {
  it('renders the loader component', () => {
    const { getByTestId } = render(<MyLoader />);
    const loaderComponent = getByTestId('loader');
    expect(loaderComponent).toBeInTheDocument();
  });

  it('applies the correct CSS class names', () => {
    const { getByTestId } = render(<MyLoader />);
    const loader = getByTestId('loader');
    expect(loader).toHaveClass('loader');
  });
});
