"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="label">Common Questions</span>
          <h2 className="heading-xl">Frequently Asked Questions</h2>
        </div>
        <div className="faq__list">
          {faqItems.map((item, i) => (
            <div className={`faq__item${openIndex === i ? " faq__item--open" : ""}`} key={i}>
              <button className="faq__question" type="button" aria-expanded={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {item.q}
                <svg className="faq__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="faq__answer" role="region"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
