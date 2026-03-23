import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/feed',   label: 'Feed' },
  { to: '/jobs',   label: 'Jobs' },
  { to: '/events', label: 'Events' },
  { to: '/forums', label: 'Forums' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <span className="brand-name">Reclassified</span>
          <span className="brand-dmv">DMV</span>
          <span className="brand-tagline">Reclassified. Not retired.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="btn btn-primary btn-sm">Join Free</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <div className="mobile-actions">
            <button className="btn btn-outline" style={{ width: '100%' }}>Sign In</button>
            <button className="btn btn-primary" style={{ width: '100%' }}>Join Free</button>
          </div>
        </div>
      )}
    </nav>
  );
}
