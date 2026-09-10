import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import QuoteEstimator from "@/components/home/QuoteEstimator";

describe("QuoteEstimator", () => {
  it("renders the calculator heading", () => {
    render(<QuoteEstimator />);
    expect(screen.getByText("See Your Savings in Real Time")).toBeInTheDocument();
    expect(screen.getByText("Instant Estimate")).toBeInTheDocument();
  });

  it("shows initial estimate values", () => {
    render(<QuoteEstimator />);
    expect(screen.getByText("$250")).toBeInTheDocument();
    expect(screen.getByText("monthly savings")).toBeInTheDocument();
    expect(screen.getByText("per year")).toBeInTheDocument();
    expect(screen.getByText("Your Estimate")).toBeInTheDocument();
  });

  it("shows three scenarios", () => {
    render(<QuoteEstimator />);
    expect(screen.getByText("Conservative")).toBeInTheDocument();
    expect(screen.getByText("Moderate")).toBeInTheDocument();
    expect(screen.getByText("Aggressive")).toBeInTheDocument();
    expect(screen.getByText("Savings by Scenario")).toBeInTheDocument();
  });

  it("updates estimate when slider changes", () => {
    render(<QuoteEstimator />);

    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "400" } });

    expect(screen.getByText("$400")).toBeInTheDocument();
  });

  it("shows cost breakdown", () => {
    render(<QuoteEstimator />);
    expect(screen.getByText("System Cost")).toBeInTheDocument();
    expect(screen.getByText("Federal Tax Credit (30%)")).toBeInTheDocument();
    expect(screen.getByText("Your Cost")).toBeInTheDocument();
    expect(screen.getByText("25-Year Savings")).toBeInTheDocument();
  });

  it("renders roof type buttons", () => {
    render(<QuoteEstimator />);
    expect(screen.getByText("Asphalt Shingle")).toBeInTheDocument();
    expect(screen.getByText("Tile")).toBeInTheDocument();
    expect(screen.getByText("Metal")).toBeInTheDocument();
    expect(screen.getByText("Flat / Low Slope")).toBeInTheDocument();
  });
});
