import { ImageResponse } from "next/og";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "192px",
          height: "192px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a3d2f",
        }}
      >
        <svg width="160" height="160" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#0a3d2f" stroke="#e8a838" strokeWidth="3" />
          <path d="M50 12 L58 38 L82 30 L65 50 L88 55 L65 62 L82 82 L58 72 L50 96 L42 72 L18 82 L35 62 L12 55 L35 50 L18 30 L42 38 Z" fill="#e8a838" />
          <circle cx="50" cy="54" r="14" fill="#0a3d2f" />
          <path d="M42 48 L46 48 L46 60 L54 60 L54 48 L58 48 L58 42 L42 42 Z" fill="white" />
          <path d="M42 42 L58 42 L58 46 L42 46 Z" fill="white" />
        </svg>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
