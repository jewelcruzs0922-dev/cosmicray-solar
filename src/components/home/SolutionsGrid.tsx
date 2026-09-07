import Image from "next/image";

export default function SolutionsGrid() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__inner">
        <div className="solutions__header">
          <span className="label">What We Do</span>
          <h2 className="heading-xl">Solar Solutions Built for <em>Your</em> Home</h2>
          <p className="subheading">Every home is different. We design custom systems that match your energy needs, roof layout, and budget.</p>
        </div>
        <div className="bento">
          <div className="bento__card bento__card--large">
            <Image src="https://images.pexels.com/photos/7211069/pexels-photo-7211069.jpeg" alt="Aerial view of solar panels on rooftop in a European city" width="800" height="600" sizes="(max-width: 1024px) 100vw, 800px" loading="lazy" />
            <div className="bento__card-content">
              <span className="label label--light">Most Popular</span>
              <h3 className="heading-lg">Residential Solar</h3>
              <p>Custom rooftop systems with net metering.</p>
              <a href="/schedule" className="btn btn--primary btn--small">Get Started &rarr;</a>
            </div>
          </div>
          <div className="bento__card">
            <div className="bento__card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
            <h3 className="heading-md">Commercial Solar</h3>
            <p>Large-scale installations that reduce operating costs.</p>
          </div>
          <div className="bento__card">
            <div className="bento__card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="6" width="18" height="12" rx="2" /><line x1="23" y1="13" x2="23" y2="11" /></svg></div>
            <h3 className="heading-md">Heat Pumps</h3>
            <p>Energy-efficient heating using renewable energy.</p>
          </div>
          <div className="bento__card">
            <div className="bento__card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
            <h3 className="heading-md">Battery Storage</h3>
            <p>Store excess solar energy for nighttime use.</p>
          </div>
          <div className="bento__card">
            <div className="bento__card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg></div>
            <h3 className="heading-md">EV Charging</h3>
            <p>Power your car with your own solar energy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
