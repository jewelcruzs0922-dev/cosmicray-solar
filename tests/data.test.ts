import { describe, it, expect } from "vitest";
import { faqItems } from "@/data/faq";
import { blogPosts } from "@/data/blogPosts";
import { cities } from "@/data/cities";
import { searchablePages } from "@/data/searchablePages";
import { SITE_URL, PHONE, EMAIL, HEADER_HEIGHT } from "@/lib/constants";

describe("FAQ data", () => {
  it("has at least 4 items", () => {
    expect(faqItems.length).toBeGreaterThanOrEqual(4);
  });

  it("each item has question and answer", () => {
    faqItems.forEach((item) => {
      expect(item.q).toBeTruthy();
      expect(item.a).toBeTruthy();
    });
  });

  it("questions are unique", () => {
    const questions = faqItems.map((q) => q.q);
    expect(new Set(questions).size).toBe(questions.length);
  });
});

describe("Blog posts data", () => {
  it("has 4 posts", () => {
    expect(blogPosts.length).toBe(4);
  });

  it("each post has required fields", () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.image).toBeTruthy();
      expect(post.category).toBeTruthy();
    });
  });

  it("slugs start with /blog/", () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toMatch(/^\/blog\//);
    });
  });
});

describe("Cities data", () => {
  it("has 6 cities", () => {
    expect(cities.length).toBe(6);
  });

  it("each city has required fields", () => {
    cities.forEach((city) => {
      expect(city.slug).toBeTruthy();
      expect(city.name).toBeTruthy();
      expect(city.state).toBeTruthy();
      expect(city.image).toBeTruthy();
      expect(city.incentives.length).toBeGreaterThan(0);
      expect(city.stats.length).toBeGreaterThan(0);
      expect(city.neighborhoods.length).toBeGreaterThan(0);
    });
  });

  it("slugs are URL-safe", () => {
    cities.forEach((city) => {
      expect(city.slug).toMatch(/^[a-z-]+$/);
    });
  });
});

describe("Searchable pages", () => {
  it("has entries", () => {
    expect(searchablePages.length).toBeGreaterThan(0);
  });

  it("each page has title, href, and desc", () => {
    searchablePages.forEach((page) => {
      expect(page.title).toBeTruthy();
      expect(page.href).toBeTruthy();
      expect(page.desc).toBeTruthy();
    });
  });
});

describe("Constants", () => {
  it("SITE_URL is a valid URL", () => {
    expect(SITE_URL).toMatch(/^https:\/\//);
  });

  it("PHONE is a valid format", () => {
    expect(PHONE).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/);
  });

  it("EMAIL contains @", () => {
    expect(EMAIL).toContain("@");
  });

  it("HEADER_HEIGHT is a positive number", () => {
    expect(HEADER_HEIGHT).toBeGreaterThan(0);
  });
});
