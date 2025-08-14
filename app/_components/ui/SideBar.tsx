import React from "react";
import Link from "next/link";

function SideBar() {
  return (
    <ul className="">
      <li>
        <Link href="">Women's Fashion</Link>
      </li>
      <li>
        <Link href={"/"}>Men's Fashion</Link>
      </li>
      <li>
        <Link href={"/"}>Electronics</Link>
      </li>
      <li>
        <Link href={"/"}>Home & Lifestyle</Link>
      </li>
      <li>
        <Link href={"/"}>Medicine</Link>
      </li>
      <li>
        <Link href={"/"}>Sports & Outdoor</Link>
      </li>
      <li>
        <Link href={"/"}>Babies' and Toys</Link>
      </li>
      <li>
        <Link href={"/"}>Groceries & Pets</Link>
      </li>
      <li>
        <Link href={"/"}>Health & Beauty</Link>
      </li>
    </ul>
  );
}

export default SideBar;
