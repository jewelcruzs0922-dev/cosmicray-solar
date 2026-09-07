"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  thumbnail: string;
  videoId: string;
}

const videos: VideoItem[] = [
  {
    id: "martinez-family",
    name: "Martinez Family",
    location: "Phoenix, AZ",
    quote: "We slept through a 6-hour outage while our neighbors were in the dark.",
    thumbnail: "https://images.pexels.com/photos/37083400/pexels-photo-37083400.jpeg",
    videoId: "KjHZs1e0UVQ",
  },
  {
    id: "johnson-family",
    name: "Johnson Family",
    location: "Austin, TX",
    quote: "Our bill went from $310 to $18. Best decision we ever made.",
    thumbnail: "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg",
    videoId: "X4wU-xY3POw",
  },
  {
    id: "greenleaf-cafe",
    name: "Greenleaf Cafe",
    location: "Denver, CO",
    quote: "Our electricity bill went from our second-biggest expense to basically zero.",
    thumbnail: "https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg",
    videoId: "jNQXAC9IVRw",
  },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="video-testimonials" aria-label="Video Testimonials">
      <div className="video-testimonials__inner">
        <div className="video-testimonials__header">
          <span className="label">Watch Their Stories</span>
          <h2 className="heading-xl">Watch Our Customer Stories</h2>
          <p className="subheading" style={{ margin: "0 auto" }}>
            Real homeowners sharing their solar journey in their own words.
          </p>
        </div>

        <div className="video-testimonials__grid">
          {videos.map((video) => (
            <article className="video-card" key={video.id}>
              <button
                className="video-card__thumbnail"
                onClick={() => setActiveVideo(video.videoId)}
                aria-label={`Play video testimonial from ${video.name}`}
              >
                <Image
                  src={video.thumbnail}
                  alt={`Video testimonial thumbnail for ${video.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="video-card__play" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </button>
              <div className="video-card__body">
                <strong className="video-card__name">{video.name}</strong>
                <span className="video-card__location">{video.location}</span>
                <p className="video-card__quote">&ldquo;{video.quote}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideo(null)}
        >
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal__close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Customer video testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
