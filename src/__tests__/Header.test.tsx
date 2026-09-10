import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "@/components/Header";
import { PHONE } from "@/lib/constants";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("next/link", () => {
  return {
    default: ({ children, href, ...props }: React.ComponentProps<"a"> & { href: string }) => (
      <a href={href} {...props}>{children}</a>
    ),
  };
});

vi.mock("@/components/Logo", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="logo" {...props} />,
}));

vi.mock("@/components/CartSidebar", () => ({
  default: () => null,
}));

vi.mock("@/components/SearchOverlay", () => ({
  default: () => null,
}));

vi.mock("@/components/MobileNav", () => ({
  default: () => null,
}));

vi.mock("@/components/CartContext", () => ({
  useCart: () => ({ cartCount: 0 }),
}));

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByText("COSMIC RAY")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Solutions")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Book Now")).toBeInTheDocument();
  });

  it("shows cart button", () => {
    render(<Header />);
    expect(screen.getByLabelText("Open cart")).toBeInTheDocument();
  });

  it("shows phone number", () => {
    render(<Header />);
    expect(screen.getByText(PHONE)).toBeInTheDocument();
  });

  it("shows search button", () => {
    render(<Header />);
    expect(screen.getByLabelText("Open search")).toBeInTheDocument();
  });

  it("shows burger menu button", () => {
    render(<Header />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
});
