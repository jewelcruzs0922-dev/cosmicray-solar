import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Residential Solar",
    desc: "Custom rooftop systems with net metering. Most popular for homeowners.",
    tag: "Most Popular",
    img: "https://images.pexels.com/photos/7211069/pexels-photo-7211069.jpeg",
  },
  {
    num: "02",
    title: "Commercial Solar",
    desc: "Large-scale installations that cut operating costs by 40-60%.",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    num: "03",
    title: "Battery Storage",
    desc: "Store excess energy. Run your home at night on stored solar power.",
    img: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg",
  },
  {
    num: "04",
    title: "Heat Pumps",
    desc: "Replace your furnace with efficient electric heating from solar.",
    img: "https://images.pexels.com/photos/5691603/pexels-photo-5691603.jpeg",
  },
  {
    num: "05",
    title: "EV Charging",
    desc: "Charge your car with energy from your own roof. Free fuel forever.",
    img: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__inner">
        <div className="solutions__layout">
          <div className="solutions__left">
            <div className="solutions__sticky">
              <span className="label">What We Do</span>
              <h2 className="heading-xl">Solar solutions built for <em>your</em> home</h2>
              <p className="subheading">Every home is different. We design custom systems that match your energy needs, roof layout, and budget.</p>
              <a href="/schedule" className="btn btn--primary btn--large">Get your free estimate</a>
            </div>
          </div>
          <div className="solutions__right">
            {services.map((s, i) => (
              <div className="sol-card" key={s.num}>
                <div className="sol-card__num">{s.num}</div>
                <div className="sol-card__content">
                  <div className="sol-card__top">
                    <h3 className="sol-card__title">{s.title}</h3>
                    {s.tag && <span className="sol-card__tag">{s.tag}</span>}
                  </div>
                  <p className="sol-card__desc">{s.desc}</p>
                  <div className="sol-card__img">
                    <Image src={s.img} alt={s.title} width={400} height={260} sizes="(max-width: 768px) 100vw, 400px" loading="lazy" />
                  </div>
                </div>
                <div className="sol-card__line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
