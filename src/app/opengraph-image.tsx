import { ImageResponse } from "next/og";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a3d2f",
          position: "relative",
        }}
      >
        <svg width="160" height="160" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#0a3d2f" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#e8a838" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
          <path d="M50 15 L55 35 L75 30 L60 45 L80 50 L60 55 L75 70 L55 65 L50 85 L45 65 L25 70 L40 55 L20 50 L40 45 L25 30 L45 35 Z" fill="#e8a838" opacity="0.9" />
          <circle cx="50" cy="50" r="12" fill="#0a3d2f" />
          <path d="M43 54 L47 54 L47 46 L53 46 L53 54 L57 54 L57 46 L43 46 Z" fill="white" />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              fontFamily: "sans-serif",
              letterSpacing: "-1px",
            }}
          >
            Cosmic Ray Solar
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "sans-serif",
              marginTop: "8px",
            }}
          >
            Professional Solar Energy Solutions
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#e8a838",
              fontFamily: "sans-serif",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Save up to 75% on electricity bills
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
