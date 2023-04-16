import { render } from '@testing-library/react';
import { Error } from '../404';

describe('Error component', () => {
  it('should render Error 404 heading', () => {
    const { getByText } = render(<Error />);

    const heading = getByText('Error 404');
    expect(heading).toBeInTheDocument();
  });

  it('should have a specific class on the wrapper element', () => {
    const { container } = render(<Error />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('wrapError');
  });
});
