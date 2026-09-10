import Image from "next/image";
import { services } from "@/data/services";

export default function SolutionsGrid() {
  return (
    <section className="solutions" id="solutions">
      <div className="sol__bg-text" aria-hidden="true">SOLAR</div>
      <div className="solutions__inner">
        <div className="solutions__header">
          <span className="label">What We Do</span>
          <h2 className="heading-xl">Solar solutions built for <em>your</em> home</h2>
        </div>
        <div className="sol-grid">
          <a href="/schedule" className="sol-card sol-card--hero">
            <Image src={services[0].img} alt={services[0].title} width={800} height={500} sizes="100vw" className="sol-card__img" />
            <div className="sol-card__overlay" />
            <div className="sol-card__content">
              <span className="sol-card__num">01</span>
              <h3 className="sol-card__title">{services[0].title}</h3>
              <p className="sol-card__desc">{services[0].desc}</p>
              <span className="sol-card__cta">Learn more &rarr;</span>
            </div>
            <div className="sol-card__accent" style={{ background: services[0].accent }} />
          </a>
          {services.slice(1).map((s, i) => (
            <a href="/schedule" className="sol-card" key={s.title}>
              <Image src={s.img} alt={s.title} width={400} height={300} sizes="(max-width: 768px) 100vw, 400px" className="sol-card__img" />
              <div className="sol-card__overlay" />
              <div className="sol-card__content">
                <span className="sol-card__num">0{i + 2}</span>
                <h3 className="sol-card__title">{s.title}</h3>
                <p className="sol-card__desc">{s.desc}</p>
                <span className="sol-card__cta">Learn more &rarr;</span>
              </div>
              <div className="sol-card__accent" style={{ background: s.accent }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
