"use client";

import { useState, useRef, useEffect, useId } from "react";
import { faqItems } from "@/data/faq";

function FaqItem({ item, index, isOpen, onToggle, baseId }: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  baseId: string;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const questionId = `${baseId}-q-${index}`;
  const answerId = `${baseId}-a-${index}`;

  useEffect(() => {
    if (answerRef.current) {
      setHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
      <button
        className="faq__question"
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq__number">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq__question-text">{item.q}</span>
        <span className="faq__icon-wrap">
          <span className="faq__icon-line faq__icon-line--h" />
          <span className="faq__icon-line faq__icon-line--v" />
        </span>
      </button>
      <div
        className="faq__answer"
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        ref={answerRef}
        style={{ maxHeight: height ? `${height}px` : "0px" }}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

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
        <div className="faq__grid">
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              baseId={baseId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
