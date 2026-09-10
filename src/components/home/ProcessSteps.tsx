import Image from "next/image";
import { steps } from "@/data/processSteps";

export default function ProcessSteps() {

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw__deco hiw__deco--1" aria-hidden="true" />
      <div className="hiw__deco hiw__deco--2" aria-hidden="true" />
      <div className="hiw__deco hiw__deco--3" aria-hidden="true" />
      <div className="hiw__grid-bg" aria-hidden="true" />
      <div className="how-it-works__inner">
        <div className="how-it-works__header">
          <span className="label">Our Process</span>
          <h2 className="heading-xl">From Sunlight to Savings in 4 Steps</h2>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-step__img">
                <Image src={step.img} alt={step.alt} width={400} height={300} sizes="(max-width: 1024px) 100vw, 400px" loading="lazy" />
              </div>
              <div className="process-step__number">{step.num}</div>
              <h3 className="heading-md">{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
