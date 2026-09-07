export default function CertMarquee() {
  return (
    <section className="cert-marquee" aria-label="Certifications and Partners">
      <div className="cert-marquee__inner">
        <div className="cert-marquee__header">
          <span className="cert-marquee__label">Certifications &amp; Partners</span>
          <h2 className="cert-marquee__title">Trusted by Industry Leaders</h2>
        </div>
        <div className="cert-marquee__track">
          <div className="cert-marquee__slide">
            {/* ENERGY STAR */}
            <div className="cert-marquee__logo" aria-label="ENERGY STAR Certified">
              <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="138" height="46" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <text x="12" y="18" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="10" fill="currentColor" letterSpacing="0.5">ENERGY</text>
                <text x="12" y="32" fontFamily="'Arial Black',Arial,sans-serif" fontWeight="900" fontSize="11" fill="currentColor" letterSpacing="0.5">STAR</text>
                <path d="M108 14l2.5 5.2L117 21l-4.5 4 1.5 6L108 27l-5 4 1.5-6-4.5-4 6.5-1.8z" fill="currentColor" opacity="0.7" />
                <circle cx="110" cy="22" r="14" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
              </svg>
            </div>
            {/* NABCEP */}
            <div className="cert-marquee__logo" aria-label="NABCEP Certified">
              <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M22 10l3 6.5L32 18l-5 4.5 1.5 6.5L22 26l-6.5 3 1.5-6.5-5-4.5 7-1.5z" fill="currentColor" opacity="0.15" />
                <path d="M22 14l2 4.5L29 21l-3.5 3 1 4.5L22 26.5l-4.5 2 1-4.5-3.5-3 5.5-1z" fill="currentColor" opacity="0.3" />
                <text x="44" y="20" fontFamily="'Trebuchet MS',sans-serif" fontWeight="700" fontSize="13" fill="currentColor" letterSpacing="1.5">NABCEP</text>
                <text x="44" y="34" fontFamily="'Trebuchet MS',sans-serif" fontWeight="400" fontSize="7" fill="currentColor" opacity="0.5" letterSpacing="1">CERTIFIED</text>
              </svg>
            </div>
            {/* BBB A+ */}
            <div className="cert-marquee__logo" aria-label="BBB A+ Rated">
              <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <text x="9" y="30" fontFamily="Georgia,serif" fontWeight="700" fontSize="14" fill="currentColor" opacity="0.7">BBB</text>
                <text x="42" y="26" fontFamily="Georgia,serif" fontWeight="700" fontSize="24" fill="currentColor">A+</text>
                <text x="42" y="40" fontFamily="Georgia,serif" fontWeight="400" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="1">RATED</text>
              </svg>
            </div>
            {/* SEIA */}
            <div className="cert-marquee__logo" aria-label="Solar Energy Industries Association Member">
              <svg viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="24" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <circle cx="20" cy="24" r="6" fill="currentColor" opacity="0.1" />
                <line x1="20" y1="6" x2="20" y2="42" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                <line x1="4" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                <text x="42" y="20" fontFamily="'Century Gothic',sans-serif" fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="2">SEIA</text>
                <text x="42" y="34" fontFamily="'Century Gothic',sans-serif" fontWeight="300" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="0.5">SOLAR ENERGY</text>
              </svg>
            </div>
            {/* TESLA POWERWALL */}
            <div className="cert-marquee__logo" aria-label="Tesla Powerwall Certified Installer">
              <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="4" y="20" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="200" fontSize="16" fill="currentColor" letterSpacing="5">TESLA</text>
                <text x="4" y="36" fontFamily="'Helvetica Neue',Arial,sans-serif" fontWeight="100" fontSize="10" fill="currentColor" opacity="0.5" letterSpacing="3">POWERWALL</text>
                <rect x="140" y="12" width="8" height="24" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="144" y1="16" x2="144" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              </svg>
            </div>
            {/* enphase */}
            <div className="cert-marquee__logo" aria-label="Enphase Energy Partner">
              <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M13 24h10M18 19v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <text x="38" y="22" fontFamily="'Gill Sans',sans-serif" fontWeight="600" fontSize="14" fill="currentColor" letterSpacing="0.3">enphase</text>
                <text x="38" y="36" fontFamily="'Gill Sans',sans-serif" fontWeight="300" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="1">ENERGY</text>
              </svg>
            </div>
            {/* SOLAREDGE */}
            <div className="cert-marquee__logo" aria-label="SolarEdge Partner">
              <svg viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M10 28l4-8 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.2" />
                <text x="38" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="0.5">SolarEdge</text>
                <text x="38" y="36" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="1">TECHNOLOGIES</text>
              </svg>
            </div>
            {/* REC */}
            <div className="cert-marquee__logo" aria-label="REC Solar Premium Partner">
              <svg viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="30" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <text x="10" y="28" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="14" fill="currentColor" letterSpacing="1">REC</text>
                <text x="42" y="20" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11" fill="currentColor">REC</text>
                <text x="42" y="34" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="0.5">SOLAR</text>
              </svg>
            </div>
            {/* SUNPOWER */}
            <div className="cert-marquee__logo" aria-label="SunPower Authorized Dealer">
              <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <circle cx="18" cy="24" r="5" fill="currentColor" opacity="0.15" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line key={angle} x1={18 + 7 * Math.cos((angle * Math.PI) / 180)} y1={24 + 7 * Math.sin((angle * Math.PI) / 180)} x2={18 + 12 * Math.cos((angle * Math.PI) / 180)} y2={24 + 12 * Math.sin((angle * Math.PI) / 180)} stroke="currentColor" strokeWidth="1" opacity="0.3" />
                ))}
                <text x="40" y="22" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="14" fill="currentColor" letterSpacing="2">SUN</text>
                <text x="78" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="2">POWER</text>
                <text x="40" y="36" fontFamily="Arial,sans-serif" fontWeight="300" fontSize="7" fill="currentColor" opacity="0.4" letterSpacing="1">AUTHORIZED DEALER</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="cert-marquee__fade cert-marquee__fade--left" />
        <div className="cert-marquee__fade cert-marquee__fade--right" />
      </div>
    </section>
  );
}
