import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<nav className="navbar">
  <div className="navbar-container">
    <div className="logo">
      <img src="src/assets/spherule_logo.svg" alt="Logo" />
    </div>

    <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
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


