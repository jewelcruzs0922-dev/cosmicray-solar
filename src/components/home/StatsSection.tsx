export default function StatsSection() {
  return (
    <section className="stats" aria-label="Statistics">
      <div className="stats__inner">
        <div className="stats__item"><span className="stats__number" data-count="2400">2,400</span><span className="stats__suffix">+</span><span className="stats__label">Homes Powered</span></div>
        <div className="stats__item"><span className="stats__number" data-count="18">18</span><span className="stats__suffix">MW</span><span className="stats__label">Solar Installed</span></div>
        <div className="stats__item"><span className="stats__number" data-count="99">99</span><span className="stats__suffix">%</span><span className="stats__label">Satisfaction</span></div>
        <div className="stats__item"><span className="stats__number" data-count="14">14</span><span className="stats__suffix"> yrs</span><span className="stats__label">In Business</span></div>
      </div>
    </section>
  );
}
