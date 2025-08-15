import logo from '/src/assets/spherule_logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="brand">
          <img src={logo} alt="Logo" />
          <div>
            <p className="muted">We help travelers explore Norway, with effortless trip planning and expert guides.</p>
          </div>
        </div>

        <form className="news" onSubmit={(e)=>e.preventDefault()}>
          <label>Stay up to date</label>
          <div className="news__row">
            <input placeholder="Enter your email" />
            <button className="btn btn--pill" type="submit">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="footer__links">
        <nav>
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <nav>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Travel. All rights reserved.</span>
      </div>
    </footer>
  );
}
