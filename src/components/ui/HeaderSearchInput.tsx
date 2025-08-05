import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

interface HeaderInputProps {
  className?: string;
}

function HeaderSearchInput({ className = "" }: HeaderInputProps) {
  return (
    <div
      className={`w-full max-w-[25rem] items-center justify-center py-3 ${className}`}
    >
      <form action="" className="relative flex gap-2">
        <input
          type="text"
          placeholder="search for products or category"
          className="w-full rounded border border-gray-300 px-1 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 sm:px-4 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-0.5 top-0.5 rounded bg-pink-500 px-3 py-[12px] text-white hover:bg-pink-600 sm:px-6"
        >
          <HiMiniMagnifyingGlass className="w-full max-w-max text-lg" />
        </button>
      </form>
    </div>
  );
}

export default HeaderSearchInput;
