import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import FaqSection from "@/components/home/FaqSection";
import { faqItems } from "@/data/faq";

describe("FaqSection", () => {
  it("renders FAQ questions", () => {
    render(<FaqSection />);
    faqItems.forEach((item) => {
      expect(screen.getByText(item.q)).toBeInTheDocument();
    });
  });

  it("shows correct number of questions", () => {
    render(<FaqSection />);
    const questions = screen.getAllByRole("button", { expanded: false });
    expect(questions.length).toBe(faqItems.length);
  });

  it("expands answer on click", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);

    const firstQuestion = screen.getByText(faqItems[0].q);
    await user.click(firstQuestion);

    expect(screen.getByText(faqItems[0].a)).toBeInTheDocument();
  });

  it("collapses answer on second click", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);

    const firstQuestion = screen.getByText(faqItems[0].q).closest("button")!;
    await user.click(firstQuestion);

    const answer = screen.getByText(faqItems[0].a);
    const answerContainer = answer.closest(".faq__answer");
    expect(answerContainer).toHaveStyle({ maxHeight: expect.stringContaining("px") });

    await user.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the FAQ heading", () => {
    render(<FaqSection />);
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(screen.getByText("Common Questions")).toBeInTheDocument();
  });
});
