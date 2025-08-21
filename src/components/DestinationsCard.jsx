import { useRef } from "react";

const cards = [
  { city: "Oslo", country: "Norway", img: "/public/images/Card1.png" },
  { city: "Bergen", country: "Norway", img: "/public/images/Card2.png" },
  { city: "Tromsø", country: "Norway", img: "/public/images/Card3.png" },
  { city: "Vien", country: "Norway", img: "/public/images/Card4.png" },
  // add more bellow if needed
];

export default function Destinations() {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="destinations">
      <div className="destinations__head">
        <h2>Exploring Norway’s breathtaking<br/>scenery & landscapes</h2>
        <p>
          Discover Norway’s Wonders Effortlessly – Your
          shortcut to one-click adventures!
        </p>
      </div>

      <div className="destinations__carousel">
        <button
          className="nav-btn nav-btn--left"
          aria-label="Previous"
          onClick={() => scrollByAmount(-1)}
        >
          ❮
        </button>

        <div className="destinations__track" ref={trackRef}>
          {cards.map((c, i) => (
            <article className="dest-card" key={i}>
              <img src={c.img} alt={`${c.city}, ${c.country}`} />
              <div className="dest-card__overlay" />
              <div className="dest-card__caption">
                <h3>{c.city}</h3>
                <span>{c.country}</span>
              </div>
            </article>
          ))}
        </div>

        <button
          className="nav-btn nav-btn--right"
          aria-label="Next"
          onClick={() => scrollByAmount(1)}
        >
          ❯
        </button>
      </div>
    </section>
  );
}
