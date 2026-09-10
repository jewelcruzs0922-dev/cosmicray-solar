export interface Service {
  title: string;
  desc: string;
  img: string;
  accent: string;
}

export const services: Service[] = [
  {
    title: "Residential Solar",
    desc: "Custom rooftop systems with net metering.",
    img: "https://images.pexels.com/photos/7211069/pexels-photo-7211069.jpeg",
    accent: "#e8a838",
  },
  {
    title: "Commercial Solar",
    desc: "Large-scale installations that cut operating costs by 40-60%.",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    accent: "#16a34a",
  },
  {
    title: "Battery Storage",
    desc: "Store excess energy for nighttime use.",
    img: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg",
    accent: "#3b82f6",
  },
  {
    title: "Heat Pumps",
    desc: "Efficient electric heating from solar power.",
    img: "https://images.pexels.com/photos/5691603/pexels-photo-5691603.jpeg",
    accent: "#f97316",
  },
  {
    title: "EV Charging",
    desc: "Charge your car with energy from your own roof.",
    img: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg",
    accent: "#8b5cf6",
  },
];
