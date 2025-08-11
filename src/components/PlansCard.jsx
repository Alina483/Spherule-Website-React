const plans = [
  {
    title: "Fjordview Cabin Retreat",
    place: "Sognefjord, Norway",
    price: "$220/night",
    badge: "Top",
    img: "/public/images/card1.png",
  },
  {
    title: "Northern Lights Lodge",
    place: "Tromsø, Norway",
    price: "$250/night",
    badge: "Hot",
    img: "/public/images/card2.png",
  },
  {
    title: "Oslo Forest Hideaway",
    place: "Oslo, Norway",
    price: "$200/night",
    badge: "New",
    img: "/public/images/card3.png",
  },
];

export default function Plans() {
  return (
    <section className="plans">
      <div className="plans__head">
        <h3>Flexible Travel Plans for Every Explorer</h3>
        <p className="muted">
          Set your travel goals, optimize your itinerary, and explore Norway with ease.
        </p>
      </div>

      <div className="plans__grid">
        {plans.map((p, i) => (
          <article className="plan" key={i}>
            <div className="plan__media">
              <img src={p.img} alt={p.title} />
              <span className="plan__badge">{p.badge}</span>
            </div>
            <div className="plan__body">
              <h4>{p.title}</h4>
              <span className="muted">{p.place}</span>
              <div className="plan__price">{p.price}</div>
            </div>
          </article>
        ))}
      </div>

      <div className="plans__cta">
        <button className="btn btn--pill">Explore more</button>
      </div>
    </section>
  );
}
