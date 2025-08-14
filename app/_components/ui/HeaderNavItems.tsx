import Link from "next/link";
import React from "react";

function HeaderNavItems() {
  return (
    <ul className="hidden items-center gap-5 md:flex">
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="">Contact</Link>
      </li>
      <li>
        <Link href="">About</Link>
      </li>
      <li>
        <Link href="">Sign up</Link>
      </li>
    </ul>
  );
}

export default HeaderNavItems;
