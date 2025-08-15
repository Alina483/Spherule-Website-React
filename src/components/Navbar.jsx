import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const limit = () => window.innerHeight * 0.6; // change this if you want the navbar to change sooner or later
  let L = limit();
  const onScroll = () => setScrolled(window.scrollY > L);
  const onResize = () => { L = limit(); onScroll(); };

  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onResize);
  return () => {
    removeEventListener("scroll", onScroll);
    removeEventListener("resize", onResize);
  };
}, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="src/assets/spherule_logo.svg" alt="Logo" />
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['Home', 'Blog', 'Explore', 'About Us', 'Contact'].map((text, idx) => (
          <li key={idx} onClick={() => setMenuOpen(false)}>{text}</li>
        ))}
      </ul>

      <div className={`auth-buttons ${menuOpen ? 'open' : ''}`}>
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;



