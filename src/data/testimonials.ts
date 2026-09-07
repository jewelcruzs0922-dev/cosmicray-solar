export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  savings?: string;
  system?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Los Angeles, CA",
    text: "Our electricity bill went from $310/month to $18/month. The installation was smooth and the team handled all the permits. We wish we had done this years ago.",
    rating: 5,
    savings: "$292/month",
    system: "8.5kW panels + 2 Powerwalls",
  },
  {
    name: "Carlos R.",
    location: "Phoenix, AZ",
    text: "With two Powerwalls, we slept through a 6-hour summer outage while our neighbors were in the dark. The whole process from quote to install took 3 weeks.",
    rating: 5,
    savings: "$240/month",
    system: "10kW panels + 2 Powerwalls",
  },
  {
    name: "Jennifer L.",
    location: "Denver, CO",
    text: "We were skeptical about solar in Colorado, but the team showed us the numbers and they were right. Our system has already produced more than projected in the first 6 months.",
    rating: 5,
    savings: "$185/month",
    system: "7kW panels + Powerwall",
  },
];
