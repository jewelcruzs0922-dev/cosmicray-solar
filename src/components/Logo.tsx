interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="#0a3d2f" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#e8a838" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
      <path d="M50 15 L55 35 L75 30 L60 45 L80 50 L60 55 L75 70 L55 65 L50 85 L45 65 L25 70 L40 55 L20 50 L40 45 L25 30 L45 35 Z" fill="#e8a838" opacity="0.9" />
      <circle cx="50" cy="50" r="12" fill="#0a3d2f" />
      <text x="50" y="56" textAnchor="middle" fill="white" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16">CR</text>
    </svg>
  );
}
