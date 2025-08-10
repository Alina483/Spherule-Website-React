export default function HowItWorks() {
  const steps = [
    { title: "Choose Your Destination", text: "Select from thousands of beautiful places across Norway.", icon: "🧭" },
    { title: "Personalize Your Trip", text: "Get concise itineraries tailored to your preferences.", icon: "✨" },
    { title: "Travel Effortlessly", text: "Book and explore Norway without hassle.", icon: "🎒" },
  ];

  return (
    <section className="how">
      <div className="how__col how__copy">
        <h3>How Our Platform Works</h3>
        <p className="muted">
          Set your travel goals, optimize your itinerary, and explore Norway with ease.
          Our smart tools help you plan the perfect adventure—from fjord cruises to
          Northern Lights expeditions.
        </p>

        <ul className="how__list">
          {steps.map((s, i) => (
            <li key={i}>
              <span className="how__icon">{s.icon}</span>
              <div>
                <strong>{s.title}</strong>
                <p className="muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn--pill">Book your spot</button>
      </div>

      <div className="how__col">
        <div className="how__image">
          <img src="/images/how.jpg" alt="Kayak on a Norwegian lake" />
        </div>
      </div>
    </section>
  );
}
