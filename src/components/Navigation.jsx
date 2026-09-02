import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, profile } from '../data/siteData.js';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="wordmark" to="/" aria-label="Dilasa Yaman home">
          {profile.initials}
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className={`nav-links ${isOpen ? 'is-open' : ''}`} id="primary-menu">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-book" to="/book">
            Book a Call
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
