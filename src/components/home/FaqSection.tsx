"use client";

import { useState, useId } from "react";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="label">Common Questions</span>
          <h2 className="heading-xl">Frequently Asked Questions</h2>
        </div>
        <div className="faq__list">
          {faqItems.map((item, i) => {
            const questionId = `${baseId}-q-${i}`;
            const answerId = `${baseId}-a-${i}`;
            const isOpen = openIndex === i;
            return (
              <div className={`faq__item${isOpen ? " faq__item--open" : ""}`} key={i}>
                <button
                  className="faq__question"
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <svg className="faq__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                <div className="faq__answer" id={answerId} role="region" aria-labelledby={questionId}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
