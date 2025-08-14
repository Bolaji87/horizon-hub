// LogoIcon.tsx
interface LogoProps {
  className?: string;
}

function LogoIcon({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={`h-8 w-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Horizon Hub"
    >
      <text
        x="0"
        y="26"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#1d1c1c"
      >
        Horizon Hub
      </text>
    </svg>
  );
}

export default LogoIcon;
