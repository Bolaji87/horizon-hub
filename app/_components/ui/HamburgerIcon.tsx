"use client";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HamburgerIconProps } from "@/app/_lib/types";

function HamburgerIcon({ className }: HamburgerIconProps) {
  return (
    <button className="text-2xl text-gray-700">
      <HiOutlineBars3 className={`text-3xl ${className}`} />
    </button>
  );
}

export default HamburgerIcon;
