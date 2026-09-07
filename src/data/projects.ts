export interface Project {
  id: string;
  title: string;
  location: string;
  systemSize: number;
  annualSavings: number;
  installationDate: string;
  description: string;
  beforeBill: number;
  afterBill: number;
  tags: "residential" | "commercial";
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "johnson-home-austin",
    title: "Johnson Family Residence",
    location: "Austin, TX",
    systemSize: 10.5,
    annualSavings: 3492,
    installationDate: "2024-03-15",
    description:
      "Full rooftop installation with battery backup. The Johnsons were paying over $300/month and now pay just the grid connection fee.",
    beforeBill: 310,
    afterBill: 18,
    tags: "residential",
    imageUrl:
      "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg",
  },
  {
    id: "martinez-home-phoenix",
    title: "Martinez Family Residence",
    location: "Phoenix, AZ",
    systemSize: 12,
    annualSavings: 2180,
    installationDate: "2024-06-20",
    description:
      "High-efficiency panels with dual Powerwall batteries designed for extreme desert heat and outage protection.",
    beforeBill: 265,
    afterBill: 0,
    tags: "residential",
    imageUrl:
      "https://images.pexels.com/photos/37083400/pexels-photo-37083400.jpeg",
  },
  {
    id: "greenleaf-cafe-denver",
    title: "Greenleaf Cafe",
    location: "Denver, CO",
    systemSize: 25,
    annualSavings: 10200,
    installationDate: "2024-09-10",
    description:
      "Commercial installation covering kitchen, lighting, and HVAC. System produces 110% of annual usage with net metering credits.",
    beforeBill: 850,
    afterBill: 0,
    tags: "commercial",
    imageUrl:
      "https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg",
  },
  {
    id: "chen-home-seattle",
    title: "Chen Residence",
    location: "Seattle, WA",
    systemSize: 8.5,
    annualSavings: 1920,
    installationDate: "2025-02-28",
    description:
      "Custom array design with shade analysis to optimize production in Pacific Northwest conditions. Monitoring app included.",
    beforeBill: 210,
    afterBill: 25,
    tags: "residential",
    imageUrl:
      "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg",
  },
  {
    id: "sunrise-offices-nashville",
    title: "Sunrise Professional Offices",
    location: "Nashville, TN",
    systemSize: 40,
    annualSavings: 14400,
    installationDate: "2024-11-05",
    description:
      "Large commercial rooftop installation across three connected office buildings. Includes EV charging stations for employee parking.",
    beforeBill: 1200,
    afterBill: 45,
    tags: "commercial",
    imageUrl:
      "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
  },
  {
    id: "santos-home-tampa",
    title: "Santos Family Residence",
    location: "Tampa, FL",
    systemSize: 10,
    annualSavings: 2640,
    installationDate: "2024-01-18",
    description:
      "Storm-ready solar system with battery backup that kept the home powered for three days during Hurricane Milton.",
    beforeBill: 245,
    afterBill: 12,
    tags: "residential",
    imageUrl:
      "https://images.pexels.com/photos/10893059/pexels-photo-10893059.jpeg",
  },
  {
    id: "foster-home-charlotte",
    title: "Foster Residence",
    location: "Charlotte, NC",
    systemSize: 7.5,
    annualSavings: 2040,
    installationDate: "2025-03-12",
    description:
      "One-day installation with full permit handling. System designed to maximize North Carolina's state incentives and net metering program.",
    beforeBill: 195,
    afterBill: 30,
    tags: "residential",
    imageUrl:
      "https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg",
  },
];
