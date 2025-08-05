import React from "react";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`w-auto text-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 80"
        fill="none"
        className="hidden h-auto w-full max-w-48 font-bold md:block"
      >
        <circle
          cx="40"
          cy="40"
          r="20"
          fill="#f472b6
    "
        />
        <path
          d="M0 50 Q40 30, 80 50 T160 50"
          stroke="#0F172A"
          strokeWidth="4"
          fill="none"
        />
        <text
          x="90"
          y="55"
          fill="#0F172A"
          fontSize="28"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          Horizon Hub
        </text>
      </svg>
    </div>
  );
}

export default Logo;
