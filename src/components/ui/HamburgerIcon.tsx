import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

function HamburgerIcon() {
  return (
    <button
      // onClick={toggleSidebar}
      className="text-2xl text-gray-700"
    >
      <HiOutlineBars3 />
    </button>
  );
}

export default HamburgerIcon;
