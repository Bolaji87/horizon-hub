"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

function Branding() {
  return (
    <div className="relative h-full w-full">
      <div className="mt-6 flex items-center justify-center">
        <h1>
          <svg
            width="200"
            height="80"
            viewBox="0 0 300 80"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Horizon Unisex Hub"
          >
            <text
              x="0"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="30"
              fontWeight="bold"
              fill="#333"
            >
              Horizon Unisex Hub
            </text>
          </svg>
        </h1>
      </div>
      <div className="absolute bottom-5 left-[10.5px] z-20 flex w-full max-w-44 justify-center">
        <button className="flex w-full items-center justify-center gap-2 rounded bg-black px-6 py-3 text-lg font-medium text-white">
          Sign Up
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Branding;
