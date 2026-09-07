import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="label">What Our Customers Say</span>
          <h2 className="heading-xl">Real Homeowners, Real Savings</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                {"\u2605".repeat(t.rating)}
              </div>
              <blockquote className="testimonial-card__text">&ldquo;{t.text}&rdquo;</blockquote>
              {t.savings && (
                <div className="testimonial-card__savings">
                  <strong>Monthly savings:</strong> {t.savings}
                </div>
              )}
              {t.system && (
                <div className="testimonial-card__system">
                  <strong>System:</strong> {t.system}
                </div>
              )}
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
