import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="wrap">
        <NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--active">
          Главная
        </NavLink>
      </div>
      <div className="wrap">
        <NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active">
          О нас
        </NavLink>
      </div>
    </nav>
  );
};
