import React from "react";
import HeaderSearchInput from "./HeaderSearchInput";
import CartIcon from "./CartIcon";

function HeaderRightBar() {
  return (
    <div className="flex gap-3 px-0.5">
      <HeaderSearchInput className="hidden sm:inline-block" />
      <CartIcon />
    </div>
  );
}

export default HeaderRightBar;
