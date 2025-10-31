import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>BOTANICA</h1>
          <span>Кальянная & Кафе</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/menu" 
            className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
          >
            🍽️ Меню
          </Link>
          <Link 
            to="/hall-map" 
            className={`nav-link ${location.pathname === '/hall-map' ? 'active' : ''}`}
          >
            🗺️ Схема зала
          </Link>
          <Link 
            to="/booking" 
            className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}
          >
            📅 Бронирование
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            👤 Профиль
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            ℹ️ О нас
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;