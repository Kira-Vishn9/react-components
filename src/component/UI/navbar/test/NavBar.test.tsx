import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../NavBar';

describe('NavBar component', () => {
  it('should render three navigation links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = getByText('Главная');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = getByText('О нас');
    expect(aboutLink).toBeInTheDocument();

    const addLink = getByText('Создать новую карточку');
    expect(addLink).toBeInTheDocument();
  });

  it('should have active class on current page link', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = getByText('Главная');
    expect(homeLink).not.toHaveClass('active');

    const aboutLink = getByText('О нас');
    expect(aboutLink).toHaveClass('active');

    const addLink = getByText('Создать новую карточку');
    expect(addLink).not.toHaveClass('active');
  });
});
