import { reviews } from "@/data/reviews";

const highlightedWords = ["flawless", "banking credits", "professional", "paid for itself", "$240/month", "real deal", "one day", "$0 down", "exactly as projected", "best price"];

function getHighlight(text: string): { before: string; word: string; after: string } | null {
  for (const w of highlightedWords) {
    const idx = text.toLowerCase().indexOf(w.toLowerCase());
    if (idx !== -1) {
      return { before: text.slice(0, idx), word: text.slice(idx, idx + w.length), after: text.slice(idx + w.length) };
    }
  }
  return null;
}

export default function ReviewsSection() {
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="reviews" id="reviews" aria-label="Customer Reviews">
      <div className="reviews__bg-orb reviews__bg-orb--1" aria-hidden="true" />
      <div className="reviews__bg-orb reviews__bg-orb--2" aria-hidden="true" />
      <div className="reviews__bg-orb reviews__bg-orb--3" aria-hidden="true" />
      <div className="reviews__bg-ring reviews__bg-ring--1" aria-hidden="true" />
      <div className="reviews__bg-ring reviews__bg-ring--2" aria-hidden="true" />
      <div className="reviews__inner">
        <div className="reviews__header">
          <div className="reviews__header-top">
            <span className="label">Verified Reviews</span>
            <div className="reviews__google-badge">
              <svg viewBox="0 0 272 92" aria-label="Google" role="img" width="60" height="20">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.19V32H67.4c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.7.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="#4285F4"/>
              </svg>
            </div>
          </div>
          <h2 className="heading-xl">Don&apos;t Take Our Word</h2>
          <div className="reviews__aggregate">
            <span className="reviews__aggregate-rating">{avgRating.toFixed(1)}</span>
            <div className="reviews__aggregate-info">
              <div className="reviews__aggregate-stars" aria-label={`${avgRating.toFixed(1)} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={star <= Math.round(avgRating) ? "var(--color-accent)" : "var(--color-border)"} aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="reviews__aggregate-count">across {reviews.length} reviews</span>
            </div>
          </div>
        </div>

        <div className="reviews__scroll">
          {reviews.map((review, i) => {
            const highlight = getHighlight(review.text);
            const isDark = i % 3 === 2;
            return (
              <article className={`review-card${isDark ? " review-card--dark" : ""}`} key={i}>
                <div className="review-card__quote-mark" aria-hidden="true">&ldquo;</div>
                <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= review.rating ? "var(--color-accent)" : "var(--color-border)"} aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {highlight ? (
                  <p className="review-card__text">
                    {highlight.before}<span className="review-card__highlight">{highlight.word}</span>{highlight.after}
                  </p>
                ) : (
                  <p className="review-card__text">{review.text}</p>
                )}
                <div className="review-card__footer">
                  <div className="review-card__avatar" aria-hidden="true">{review.name.charAt(0)}</div>
                  <div>
                    <strong className="review-card__name">{review.name}</strong>
                    <span className="review-card__location">{review.location}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reviews__cta">
          <a href="https://www.google.com/search?q=cosmic+ray+solar+reviews" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            Read all {reviews.length} reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
