import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

interface HeaderInputProps {
  className?: string;
}

function HeaderSearchInput({ className = "" }: HeaderInputProps) {
  return (
    <div
      className={`w-full max-w-[28rem] items-center justify-center py-3 ${className}`}
    >
      <form action="" className="relative flex gap-2">
        <input
          type="text"
          placeholder="Search for products or category"
          className="w-full rounded border border-gray-300 px-4 py-3.5 text-sm placeholder:px-3 placeholder:pl-8 placeholder:text-lg placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 sm:px-4 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-0.5 top-[1px] rounded bg-pink-500 px-1 py-[11.5px] text-white hover:bg-pink-600 sm:px-3"
        >
          Search
        </button>
        <HiMiniMagnifyingGlass className="absolute left-[7px] top-3.5 w-full max-w-max pl-1 text-xl" />
      </form>
    </div>
  );
}

export default HeaderSearchInput;
