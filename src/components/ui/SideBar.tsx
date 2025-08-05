import React from "react";
import SideNav from "./SideNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="flex flex-col px-5 py-4">
      <Logo className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 80"
          fill="none"
          className="h-auto w-48"
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
      </Logo>
      <SideNav />
    </div>
  );
}

export default Sidebar;
