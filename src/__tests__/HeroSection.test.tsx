import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HeroSection from "@/components/home/HeroSection";

vi.mock("framer-motion", () => {
  const motion = new Proxy(
    {},
    {
      get: (_target: Record<string, unknown>, prop: string) => {
        const Component = React.forwardRef(({ children, ...props }: React.HTMLAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) => {
          const filteredProps: Record<string, unknown> = {};
          Object.keys(props).forEach((key) => {
            if (key !== "initial" && key !== "animate" && key !== "transition" && key !== "whileHover" && key !== "whileInView" && key !== "viewport" && key !== "variants" && key !== "exit" && key !== "layout" && key !== "style" && !key.startsWith("on")) {
              filteredProps[key] = (props as Record<string, unknown>)[key];
            }
          });
          return React.createElement(prop === "div" ? "div" : prop, { ...filteredProps, ref }, children);
        });
        Component.displayName = `motion.${prop}`;
        return Component;
      },
    }
  );
  return {
    motion,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

vi.mock("next/image", () => {
  return {
    default: (props: Record<string, unknown>) => {
      const { priority: _priority, loading: _loading, sizes: _sizes, fill: _fill, ...rest } = props;
      return <img {...rest} alt={(rest.alt as string) || ""} />;
    },
  };
});

vi.mock("@/components/MagneticButton", () => ({
  default: ({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(screen.getByLabelText("Go")).toBeInTheDocument();
    expect(screen.getByLabelText("solar.")).toBeInTheDocument();
    expect(screen.getByLabelText("Save.")).toBeInTheDocument();
  });

  it("shows the CTA button", () => {
    render(<HeroSection />);
    expect(screen.getByText("Get your free estimate")).toBeInTheDocument();
  });

  it("renders carousel dots", () => {
    render(<HeroSection />);
    const dots = screen.getAllByLabelText(/^Slide \d+$/);
    expect(dots.length).toBe(4);
  });

  it("shows social proof", () => {
    render(<HeroSection />);
    expect(screen.getByText("2,400+")).toBeInTheDocument();
    expect(screen.getByText("homeowners already saving")).toBeInTheDocument();
  });

  it("renders See How It Works link", () => {
    render(<HeroSection />);
    expect(screen.getByText("See How It Works")).toBeInTheDocument();
  });
});
