import React from "react";
import LogoIcon from "./LogoIcon";
import HamburgerIcon from "./HamburgerIcon";

function Logo() {
  return (
    <div className="flex w-40 items-center gap-2">
      <LogoIcon className="hidden md:block" />
      <HamburgerIcon className="md:hidden" />
    </div>
  );
}

export default Logo;
