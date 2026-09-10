export interface ProcessStep {
  img: string;
  alt: string;
  num: string;
  title: string;
  desc: string;
}

export const steps: ProcessStep[] = [
  { img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "Solar energy consultant reviewing home energy usage on tablet", num: "01", title: "Free Assessment", desc: "We analyze your energy usage, roof, and sun exposure." },
  { img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", alt: "Engineer designing custom solar panel layout for residential roof", num: "02", title: "Custom Design", desc: "Tailored system design that maximizes production." },
  { img: "https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg", alt: "Technician installing solar panels on rooftop", num: "03", title: "Expert Install", desc: "Certified technicians install in 1-2 days." },
  { img: "https://images.pexels.com/photos/12224996/pexels-photo-12224996.jpeg", alt: "Homeowner monitoring solar energy production on smartphone app", num: "04", title: "Start Saving", desc: "Net metering setup and immediate energy production." },
];
