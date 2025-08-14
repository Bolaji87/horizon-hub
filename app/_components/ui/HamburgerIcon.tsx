// HamburgerIcon.tsx
import { HamburgerIconProps } from "@/app/_lib/types";

function HamburgerIcon({ className }: HamburgerIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-8 w-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <rect x="3" y="6" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="16" width="18" height="2" rx="1" />
    </svg>
  );
}

export default HamburgerIcon;
