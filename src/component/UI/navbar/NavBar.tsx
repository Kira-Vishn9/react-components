import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="wrap">
        <NavLink
          to="/"
          style={(isActive) => ({ color: isActive ? 'activeClassName' : 'navbar__link' })}
        >
          Главная
        </NavLink>
      </div>
      <div className="wrap">
        <NavLink
          to="/about"
          style={(isActive) => ({ color: isActive ? 'activeClassName' : 'navbar__link' })}
        >
          О нас
        </NavLink>
      </div>
      <div className="wrap">
        <NavLink
          to="/add"
          style={(isActive) => ({ color: isActive ? 'activeClassName' : 'navbar__link' })}
        >
          Создать новую карточку
        </NavLink>
      </div>
    </nav>
  );
};
