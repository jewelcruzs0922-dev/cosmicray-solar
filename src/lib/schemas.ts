export const blogPostSchema = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => { unknown: () => unknown } }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule: { required: () => { unknown: () => unknown } }) => Rule.required() },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "tag", title: "Tag", type: "string", options: { list: ["Guide", "Battery", "Savings", "EV Charging", "News"] } },
    { name: "category", title: "Category", type: "string", options: { list: ["guide", "battery", "savings", "ev"] } },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "image", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "imageAlt", title: "Image Alt Text", type: "string" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
  ],
  orderings: [{ title: "Published Date", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "tag", media: "image" } },
};

export const citySchema = {
  name: "city",
  title: "City",
  type: "document",
  fields: [
    { name: "name", title: "City Name", type: "string", validation: (Rule: { required: () => { unknown: () => unknown } }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (Rule: { required: () => { unknown: () => unknown } }) => Rule.required() },
    { name: "state", title: "State", type: "string" },
    { name: "stateAbbr", title: "State Abbreviation", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 4 },
    { name: "image", title: "Hero Image", type: "image", options: { hotspot: true } },
    { name: "imageAlt", title: "Image Alt Text", type: "string" },
    { name: "incentives", title: "Incentives", type: "array", of: [{ type: "string" }] },
    { name: "stats", title: "Stats", type: "array", of: [{ type: "object", fields: [{ name: "label", title: "Label", type: "string" }, { name: "value", title: "Value", type: "string" }] }] },
    { name: "neighborhoods", title: "Neighborhoods", type: "array", of: [{ type: "string" }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
  ],
  preview: { select: { title: "name", subtitle: "state" } },
};

export const schemas = [blogPostSchema, citySchema];
