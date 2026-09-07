export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  incentives: string[];
  stats: { label: string; value: string }[];
  neighborhoods: string[];
}

export const cities: CityData[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    image: "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg",
    imageAlt: "Los Angeles skyline with solar panels on residential rooftops",
    tagline: "Power Your LA Home With the Sun",
    description: "Los Angeles gets over 280 sunny days per year — making it one of the best cities in America for solar energy. Cosmic Ray Solar has helped hundreds of LA homeowners cut their electricity bills by up to 75%.",
    incentives: ["SGIP battery storage rebate", "LADWP net metering", "Property tax exemption for solar", "Federal 30% ITC"],
    stats: [
      { label: "Avg. Savings", value: "$2,100/yr" },
      { label: "Sunny Days", value: "280+" },
      { label: "Homes Powered", value: "340+" },
    ],
    neighborhoods: ["Santa Monica", "Pasadena", "Beverly Hills", "Long Beach", "Glendale", "Burbank"],
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateAbbr: "CA",
    image: "https://images.pexels.com/photos/416989/pexels-photo-416989.jpeg",
    imageAlt: "San Diego coastal neighborhood with solar panels",
    tagline: "San Diego's Top Solar Installer",
    description: "San Diego enjoys some of the best solar irradiance in the country. With high utility rates and excellent net metering policies, going solar here is a no-brainer.",
    incentives: ["SDG&E net metering", "Property tax exemption", "Federal 30% ITC", "California SB 100 clean energy credits"],
    stats: [
      { label: "Avg. Savings", value: "$2,400/yr" },
      { label: "Sunny Days", value: "266+" },
      { label: "Homes Powered", value: "280+" },
    ],
    neighborhoods: ["La Jolla", "Pacific Beach", "North Park", "Encinitas", "Chula Vista", "Carlsbad"],
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    image: "https://images.pexels.com/photos/3789087/pexels-photo-3789087.jpeg",
    imageAlt: "Phoenix desert home with rooftop solar panels",
    tagline: "Beat the Heat With Solar Power",
    description: "Phoenix gets more sunshine than almost any other US city — over 300 sunny days per year. Pair that with Arizona's excellent solar incentives and you've got a recipe for massive savings.",
    incentives: ["APS and SRP net metering", "Property tax exemption", "Federal 30% ITC", "Arizona state tax credit"],
    stats: [
      { label: "Avg. Savings", value: "$1,900/yr" },
      { label: "Sunny Days", value: "300+" },
      { label: "Homes Powered", value: "220+" },
    ],
    neighborhoods: ["Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Peoria"],
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    imageAlt: "Denver mountain neighborhood with solar installations",
    tagline: "Mile High Solar Savings",
    description: "Denver's 300+ days of sunshine and Colorado's progressive energy policies make it ideal for solar. Cosmic Ray Solar has powered hundreds of Denver homes with clean energy.",
    incentives: ["Xcel Energy net metering", "Property tax exemption", "Federal 30% ITC", "Colorado solar credits"],
    stats: [
      { label: "Avg. Savings", value: "$1,800/yr" },
      { label: "Sunny Days", value: "300+" },
      { label: "Homes Powered", value: "190+" },
    ],
    neighborhoods: ["Boulder", "Aurora", "Lakewood", "Arvada", "Westminster", "Thornton"],
  },
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg",
    imageAlt: "Austin Texas home with solar panel installation",
    tagline: "Austin's Trusted Solar Partner",
    description: "Austin's combination of high electricity rates, abundant sunshine, and strong solar incentives makes it one of the best ROI markets for solar in the country.",
    incentives: ["Austin Energy net metering", "Property tax exemption", "Federal 30% ITC", "No state income tax"],
    stats: [
      { label: "Avg. Savings", value: "$2,000/yr" },
      { label: "Sunny Days", value: "300+" },
      { label: "Homes Powered", value: "250+" },
    ],
    neighborhoods: ["Round Rock", "Cedar Park", "Georgetown", "San Marcos", "Kyle", "Pflugerville"],
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    image: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg",
    imageAlt: "Miami tropical home with solar panels on roof",
    tagline: "Sunshine State Solar Solutions",
    description: "Miami's tropical climate means year-round sunshine and high electricity bills from A/C. Solar panels with battery backup keep your home cool and your bills low — even during hurricane season.",
    incentives: ["FPL net metering", "Property tax exemption", "Federal 30% ITC", "No state income tax"],
    stats: [
      { label: "Avg. Savings", value: "$2,200/yr" },
      { label: "Sunny Days", value: "248+" },
      { label: "Homes Powered", value: "180+" },
    ],
    neighborhoods: ["Coral Gables", "Miami Beach", "Brickell", "Coconut Grove", "Key Biscayne", "Aventura"],
  },
];
