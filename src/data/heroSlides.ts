export interface HeroSlide {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}

export const slides: HeroSlide[] = [
  { src: "https://images.pexels.com/photos/9875684/pexels-photo-9875684.jpeg", alt: "Aerial view of suburban neighborhood with solar panels on rooftops", tag: "Residential Solar", caption: "Powering 2,400+ homes nationwide" },
  { src: "https://images.pexels.com/photos/22601673/pexels-photo-22601673.jpeg", alt: "High angle view of suburban houses with solar panels", tag: "Community Impact", caption: "Neighborhoods transformed by clean energy" },
  { src: "https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg", alt: "Solar panels installed on a suburban home with greenery", tag: "Smart Investment", caption: "Increase your home value by 4%" },
  { src: "https://images.pexels.com/photos/35417742/pexels-photo-35417742.jpeg", alt: "Solar panels on rooftop during golden sunset", tag: "Golden Hour", caption: "Harvesting energy from sunrise to sunset" },
];
