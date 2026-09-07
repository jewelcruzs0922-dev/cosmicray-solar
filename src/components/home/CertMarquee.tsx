export default function CertMarquee() {
  const logos = [
    { label: "ENERGY STAR", viewBox: "0 0 130 44" },
    { label: "NABCEP", viewBox: "0 0 130 44" },
    { label: "BBB A+", viewBox: "0 0 110 44" },
    { label: "SEIA", viewBox: "0 0 110 44" },
    { label: "TESLA POWERWALL", viewBox: "0 0 155 44" },
    { label: "enphase", viewBox: "0 0 125 44" },
  ];

  return (
    <section className="cert-marquee" aria-label="Certifications and Partners">
      <div className="cert-marquee__inner">
        <div className="cert-marquee__header">
          <span className="cert-marquee__label">Certifications &amp; Partners</span>
          <h2 className="cert-marquee__title">Trusted by Industry Leaders</h2>
        </div>
        <div className="cert-marquee__track">
          <div className="cert-marquee__slide">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="cert-marquee__logo">
                <svg viewBox={logo.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="22" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">{logo.label}</text>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="cert-marquee__fade cert-marquee__fade--left" />
        <div className="cert-marquee__fade cert-marquee__fade--right" />
      </div>
    </section>
  );
}
