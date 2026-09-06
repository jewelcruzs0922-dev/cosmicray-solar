export interface Product {
  id: number;
  name: string;
  category: "panels" | "batteries" | "inverters" | "chargers" | "accessories";
  price: number;
  badge?: string;
  desc: string;
  img: string;
}

export const products: Product[] = [
  { id: 1, name: "SunPower Maxeon 6 400W", category: "panels", price: 399, badge: "Best Seller", desc: "High-efficiency residential solar panel with 22.8% efficiency rating.", img: "https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg" },
  { id: 2, name: "REC Alpha Pure-R 430W", category: "panels", price: 429, badge: "New", desc: "Premium heterojunction technology for maximum energy production.", img: "https://images.pexels.com/photos/9799702/pexels-photo-9799702.jpeg" },
  { id: 10, name: "Panasonic EverVolt HK 410W", category: "panels", price: 449, desc: "All-black premium panel with 21.8% efficiency and 25-year warranty.", img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" },
  { id: 11, name: "Canadian Solar HiKu6 450W", category: "panels", price: 319, badge: "Value Pick", desc: "Mono PERC technology offering excellent performance at a competitive price.", img: "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg" },
  { id: 12, name: "LG Prime 2 440W", category: "panels", price: 479, desc: "N-type tandem cell technology with superior low-light performance.", img: "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg" },
  { id: 3, name: "Tesla Powerwall 3", category: "batteries", price: 8500, badge: "Popular", desc: "13.5 kWh home battery with integrated solar inverter.", img: "https://images.pexels.com/photos/33751679/pexels-photo-33751679.jpeg" },
  { id: 4, name: "Enphase IQ Battery 5P", category: "batteries", price: 4800, desc: "Modular 5 kWh battery with industry-leading round-trip efficiency.", img: "https://images.pexels.com/photos/33751638/pexels-photo-33751638.jpeg" },
  { id: 13, name: "Generac PWRcell 9kWh", category: "batteries", price: 5200, desc: "Modular battery system with fast backup power switching.", img: "https://images.pexels.com/photos/36085816/pexels-photo-36085816.jpeg" },
  { id: 14, name: "Enphase IQ8+ Microinverter", category: "inverters", price: 189, badge: "Top Rated", desc: "Module-level power optimization with 97.5% CEC efficiency.", img: "https://images.pexels.com/photos/33438229/pexels-photo-33438229.jpeg" },
  { id: 15, name: "SolarEdge Home 10kW", category: "inverters", price: 2199, desc: "Hybrid inverter with integrated EV charger and battery backup.", img: "https://images.pexels.com/photos/37929911/pexels-photo-37929911.jpeg" },
  { id: 16, name: "Fronius Primo 7.0", category: "inverters", price: 1899, desc: "SnapINverter design with integrated data communication.", img: "https://images.pexels.com/photos/33751639/pexels-photo-33751639.jpeg" },
  { id: 5, name: "ChargePoint Home Flex", category: "chargers", price: 649, badge: "Top Rated", desc: "Level 2 EV charger with 50A capacity and WiFi connectivity.", img: "https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg" },
  { id: 6, name: "Wallbox Pulsar Plus 48A", category: "chargers", price: 599, desc: "Compact smart EV charger with app control and scheduling.", img: "https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg" },
  { id: 17, name: "Tesla Universal Wall Connector", category: "chargers", price: 475, badge: "New", desc: "Up to 48A output with Wi-Fi connectivity and load sharing.", img: "https://images.pexels.com/photos/27355829/pexels-photo-27355829.jpeg" },
  { id: 18, name: "Emporia Level 2 EV Charger", category: "chargers", price: 399, desc: "48A fast charging with real-time energy monitoring app.", img: "https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg" },
  { id: 7, name: "Solar Monitoring System", category: "accessories", price: 299, desc: "Real-time monitoring for your solar production and consumption.", img: "https://images.pexels.com/photos/35425767/pexels-photo-35425767.jpeg" },
  { id: 8, name: "Rapid Shutdown Device", category: "accessories", price: 189, desc: "NEC 2017/2020 compliant rapid shutdown for solar installations.", img: "https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg" },
  { id: 9, name: "IronRidge Roof Mount Kit", category: "accessories", price: 349, badge: "Essential", desc: "Complete roof mounting system for residential solar installations.", img: "https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg" },
  { id: 19, name: "Midnite Solar Surge Protector", category: "accessories", price: 149, desc: "Type 1+2 SPD for comprehensive solar system surge protection.", img: "https://images.pexels.com/photos/30144993/pexels-photo-30144993.jpeg" },
  { id: 20, name: "Sense Energy Monitor", category: "accessories", price: 299, badge: "Smart", desc: "Real-time whole-home energy monitoring with AI-powered device detection.", img: "https://images.pexels.com/photos/35573433/pexels-photo-35573433.jpeg" },
];
