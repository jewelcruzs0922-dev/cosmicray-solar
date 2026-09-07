export interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export const reviews: Review[] = [
  {
    name: "Michael Torres",
    location: "Los Angeles, CA",
    text: "We went with Cosmic Ray for our 9.5kW system and couldn't be happier. The crew finished in two days, and our electricity bill dropped from $285 to $22. The Powerwall we added has already saved us during two outages this summer. Worth every penny.",
    rating: 5,
    date: "2025-08-14",
  },
  {
    name: "Priya Patel",
    location: "Austin, TX",
    text: "Got quotes from four different solar companies. Cosmic Ray had the best price and the most detailed proposal. Our 11kW system is generating more than expected — we're banking credits with the utility. The monitoring app makes it easy to track production in real time.",
    rating: 5,
    date: "2025-07-22",
  },
  {
    name: "David Kim",
    location: "Phoenix, AZ",
    text: "Living in the desert, we needed a system that could handle the brutal summer heat. Our 12kW system has been performing flawlessly through 115°F days. The install team was professional and even came back to check on the system after the first heat wave. Great customer service.",
    rating: 5,
    date: "2025-06-30",
  },
  {
    name: "Rachel Hernandez",
    location: "Denver, CO",
    text: "The installation process was smoother than expected. The team handled all the permits and HOA approvals for us. Our 8kW system has been producing right on target. Only giving 4 stars because the initial scheduling took a bit longer than promised, but the end result was excellent.",
    rating: 4,
    date: "2025-05-18",
  },
  {
    name: "James Mitchell",
    location: "San Diego, CA",
    text: "We installed a 10kW system with battery backup back in January. Already seeing $240/month savings. The crew was on time, cleaned up after themselves, and walked us through the entire system before leaving. Highly recommend Cosmic Ray to anyone considering solar.",
    rating: 5,
    date: "2025-04-05",
  },
  {
    name: "Angela Foster",
    location: "Charlotte, NC",
    text: "I was nervous about going solar in North Carolina, but the team explained how the tax credits and net metering work here. Our 7.5kW system was installed in one day. Our bill went from $195 to about $30. Very happy with the whole experience.",
    rating: 5,
    date: "2025-03-12",
  },
  {
    name: "Robert Chen",
    location: "Seattle, WA",
    text: "Even with Seattle's cloudy reputation, our 8.5kW system is producing enough to cover our usage. The team did a thorough shade analysis before designing the array. Installation was professional and they worked around our schedule. Would be 5 stars but the app could use some improvements.",
    rating: 4,
    date: "2025-02-28",
  },
  {
    name: "Maria Santos",
    location: "Tampa, FL",
    text: "After Hurricane Milton, our Powerwalls kept the fridge running and the lights on for three days while the whole neighborhood was in the dark. The 10kW system we installed last year paid for itself during that storm alone. Cosmic Ray Solar is the real deal.",
    rating: 5,
    date: "2025-01-15",
  },
  {
    name: "Thomas Wright",
    location: "Nashville, TN",
    text: "The financing options were great — we ended up with a $0 down loan and our monthly solar payment is less than what we were paying the utility. Our 9kW system has been performing beautifully since installation. Only hiccup was a minor delay on the final inspection, but Cosmic Ray kept us informed the whole time.",
    rating: 4,
    date: "2024-12-10",
  },
  {
    name: "Lisa Nakamura",
    location: "Portland, OR",
    text: "Fantastic experience from start to finish. The design team created a custom layout that maximized our roof space despite some tricky angles. Our 7kW system is producing exactly as projected. We love checking the monitoring app every morning to see our production numbers.",
    rating: 5,
    date: "2024-11-03",
  },
];
