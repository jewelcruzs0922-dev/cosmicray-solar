import { sanityClient } from "@/lib/sanity";
import { blogPosts } from "@/data/blogPosts";
import { cities } from "@/data/cities";
import { faqItems } from "@/data/faq";

const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  tag: string;
  category: string;
  date: string;
  dateDisplay: string;
  image: string;
  imageAlt: string;
  content?: unknown[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  incentives: string[];
  stats: { label: string; value: string }[];
  neighborhoods: string[];
}

export async function getBlogPosts(): Promise<BlogPostData[]> {
  if (!isConfigured) {
    return blogPosts.map((p) => ({
      ...p,
      description: p.excerpt,
      imageAlt: p.alt,
    }));
  }

  try {
    const posts = await sanityClient.fetch<BlogPostData[]>(
      `*[_type == "blogPost"] | order(publishedAt desc) {
        "slug": slug.current,
        title,
        description,
        tag,
        category,
        "date": publishedAt,
        "dateDisplay": string(publishedAt, {dateStyle: "medium"}),
        "image": image.asset->url,
        imageAlt,
        content
      }`
    );
    return posts;
  } catch {
    return blogPosts.map((p) => ({
      ...p,
      description: p.excerpt,
      imageAlt: p.alt,
    }));
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  if (!isConfigured) {
    const post = blogPosts.find((p) => p.slug === `/blog/${slug}`);
    if (!post) return null;
    return {
      slug: post.slug,
      title: post.title,
      description: post.excerpt,
      tag: post.tag,
      category: post.category,
      date: post.date,
      dateDisplay: post.dateDisplay,
      image: post.image,
      imageAlt: post.alt,
    };
  }

  try {
    const post = await sanityClient.fetch<BlogPostData | null>(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        description,
        tag,
        category,
        "date": publishedAt,
        "dateDisplay": string(publishedAt, {dateStyle: "medium"}),
        "image": image.asset->url,
        imageAlt,
        content
      }`,
      { slug }
    );
    return post;
  } catch {
    return null;
  }
}

export async function getCities(): Promise<CityData[]> {
  if (!isConfigured) {
    return cities;
  }

  try {
    const cityData = await sanityClient.fetch<CityData[]>(
      `*[_type == "city"] | order(name asc) {
        "slug": slug.current,
        name,
        state,
        stateAbbr,
        tagline,
        description,
        "image": image.asset->url,
        imageAlt,
        incentives,
        stats,
        neighborhoods
      }`
    );
    return cityData;
  } catch {
    return cities;
  }
}

export async function getCity(slug: string): Promise<CityData | null> {
  if (!isConfigured) {
    return cities.find((c) => c.slug === slug) ?? null;
  }

  try {
    const city = await sanityClient.fetch<CityData | null>(
      `*[_type == "city" && slug.current == $slug][0] {
        "slug": slug.current,
        name,
        state,
        stateAbbr,
        tagline,
        description,
        "image": image.asset->url,
        imageAlt,
        incentives,
        stats,
        neighborhoods
      }`,
      { slug }
    );
    return city;
  } catch {
    return cities.find((c) => c.slug === slug) ?? null;
  }
}

export async function getFaqItems() {
  return faqItems;
}

export { isConfigured };
