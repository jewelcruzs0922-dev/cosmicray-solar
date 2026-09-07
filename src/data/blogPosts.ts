export interface BlogPost {
  slug: string;
  image: string;
  alt: string;
  tag: string;
  date: string;
  dateDisplay: string;
  title: string;
  excerpt: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/solar-cost-guide",
    image: "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg",
    alt: "Solar panels on residential rooftop",
    tag: "Guide",
    date: "2025-01-15",
    dateDisplay: "Jan 15, 2025",
    title: "How Much Do Solar Panels Cost in 2025? Complete Price Breakdown",
    excerpt: "A detailed look at solar panel costs, factors that affect pricing, and how much you can expect to save over 25 years.",
    category: "guide",
  },
  {
    slug: "/blog/battery-storage-guide",
    image: "https://images.pexels.com/photos/9800025/pexels-photo-9800025.jpeg",
    alt: "Tesla Powerwall battery storage system",
    tag: "Battery",
    date: "2025-01-22",
    dateDisplay: "Jan 22, 2025",
    title: "Home Battery Storage: Is It Worth It? Pros, Cons & Costs",
    excerpt: "Everything you need to know about home battery storage — from how it works to whether the investment makes sense for your home.",
    category: "battery",
  },
  {
    slug: "/blog/solar-tax-credits",
    image: "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
    alt: "Solar panels in bright sunlight",
    tag: "Savings",
    date: "2025-02-01",
    dateDisplay: "Feb 1, 2025",
    title: "Solar Tax Credits 2025: How to Get 30% Off Your Installation",
    excerpt: "The federal ITC covers 30% of your solar installation cost. Here's how to qualify, apply, and maximize your savings.",
    category: "savings",
  },
  {
    slug: "/blog/ev-charging-guide",
    image: "https://images.pexels.com/photos/27355836/pexels-photo-27355836.jpeg",
    alt: "EV charger connected to electric car",
    tag: "EV Charging",
    date: "2025-02-10",
    dateDisplay: "Feb 10, 2025",
    title: "Charge Your EV With Solar: Complete Home Charging Guide",
    excerpt: "Pair your solar system with an EV charger and drive on sunshine. We cover costs, chargers, and how to maximize savings.",
    category: "ev",
  },
];
