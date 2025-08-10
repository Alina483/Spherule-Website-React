const quotes = [
  {
    text: "I didn’t just visit Norway—I experienced its soul. A magical journey through fjords and mountains.",
    name: "Brandi Blake",
    role: "Seasoned Traveler"
  },
  {
    text: "With this platform, I discovered hidden gems, from Arctic beaches to cozy Scandinavian villages.",
    name: "Taylor Morgan",
    role: "Co-Founder, CityBeat"
  },
  {
    text: "Exploring the vibrant culture of Norway opened my eyes to new tastes and delightful culinary delights.",
    name: "Avery Chen",
    role: "Co-Founder, TravelSphere"
  }
];

export default function Testimonials() {
  return (
    <section className="testi">
      <h3 className="testi__title">Hear What Travelers Say About Their<br/>Nordic Adventure!</h3>
      <div className="testi__grid">
        {quotes.map((q, i) => (
          <blockquote className="card" key={i}>
            <p>“{q.text}”</p>
            <footer>
              <strong>{q.name}</strong>
              <span className="muted">{q.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
