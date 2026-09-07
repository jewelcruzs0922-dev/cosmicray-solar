export default function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah & Tom M.", location: "Los Angeles, CA", text: "Our electricity bill went from $310/month to $18/month. The installation was smooth and the team was incredibly professional.", rating: 5 },
    { name: "Carlos R.", location: "Phoenix, AZ", text: "With two Powerwalls, we slept through a 6-hour summer outage while our neighbors were in the dark. Best investment we ever made.", rating: 5 },
    { name: "Jennifer L.", location: "Denver, CO", text: "From quote to installation in just 3 weeks. The team handled everything including permits. We're saving $200/month already.", rating: 5 },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="label">What Our Customers Say</span>
          <h2 className="heading-xl">Trusted by 2,400+ Homeowners</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                {"\u2605".repeat(t.rating)}
              </div>
              <blockquote className="testimonial-card__text">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="testimonial-card__author">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
