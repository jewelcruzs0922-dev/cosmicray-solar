import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="about" id="about">
      <div className="about__noise" />
      <div className="about__inner">
        <div className="about__glimpse">
          <div className="about__glimpse-content">
            <span className="label">About Cosmic Ray</span>
            <h2 className="heading-xl">Powering Homes Since 2012</h2>
            <p className="subheading">
              What started as one engineer&apos;s mission to help a neighbor has grown into a nationwide movement. From a small garage in Sunshine City to 15 states and 2,400+ homes powered — we&apos;re just getting started.
            </p>
            <div className="about__glimpse-stats">
              <div className="about__glimpse-stat"><span className="about__glimpse-stat-num">14+</span><span className="about__glimpse-stat-label">Years</span></div>
              <div className="about__glimpse-stat"><span className="about__glimpse-stat-num">2,400+</span><span className="about__glimpse-stat-label">Homes Powered</span></div>
              <div className="about__glimpse-stat"><span className="about__glimpse-stat-num">150+</span><span className="about__glimpse-stat-label">Team Members</span></div>
            </div>
            <Link href="/about" className="btn btn--primary btn--large about__cta">
              Learn More About Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
          <div className="about__glimpse-visual">
            <div className="about__glimpse-image-wrap">
              <Image src="https://images.pexels.com/photos/9875444/pexels-photo-9875444.jpeg" alt="Solar technician installing panel on rooftop" width="700" height="500" sizes="(max-width: 1024px) 100vw, 500px" loading="lazy" className="about__glimpse-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
