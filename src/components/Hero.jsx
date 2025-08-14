// Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      {/* optional dark/gradient overlay handled in CSS */}
      <div className="hero__content">
        <h1>
          Discover Norway’s
          <br />
          Breathtaking Beauty
        </h1>

        <p className="hero__sub">
          Embark on a journey through Norway’s stunning fjords, vibrant cities, and
          Northern Lights. Your gateway to unforgettable experiences!
        </p>

        <button className="cta all-main-btn">Explore now</button>

        <div className="hero__stats">
          <div><strong>3K+</strong><span>Beautiful Destinations</span></div>
          <div><strong>8+</strong><span>Years of Expertise</span></div>
          <div><strong>10K+</strong><span>Happy Travelers</span></div>
          <div><strong>4.5</strong><span>User Rating</span></div>
        </div>
      </div>
    </section>
  );
}
