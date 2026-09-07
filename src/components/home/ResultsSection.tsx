import Image from "next/image";

export default function ResultsSection() {
  return (
    <section className="results" id="results">
      <div className="results__inner">
        <div className="results__content">
          <span className="label label--dark">Real Results</span>
          <h2 className="heading-xl heading-xl--dark">Watch your bills <em>disappear</em></h2>
          <p className="subheading subheading--dark">Our average customer saves $1,847 per year. That&apos;s $46,000+ over 25 years.</p>
          <div className="results__metrics">
            <div className="results__metric"><span className="results__metric-value">75%</span><span className="results__metric-label">Bill reduction</span></div>
            <div className="results__metric"><span className="results__metric-value">6.2</span><span className="results__metric-label">Years payback</span></div>
            <div className="results__metric"><span className="results__metric-value">25</span><span className="results__metric-label">Year warranty</span></div>
          </div>
          <a href="/schedule" className="btn btn--accent btn--large">See my savings &rarr;</a>
        </div>
        <div className="results__visual">
          <Image src="https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg" alt="Aerial view of solar panel grid on rooftop" width={600} height={400} sizes="(max-width: 1024px) 100vw, 600px" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
