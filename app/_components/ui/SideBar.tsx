import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

function SideBar() {
  return (
    <ul className="flex h-full flex-col gap-3 pt-3 text-sm">
      <li className="flex items-center justify-between">
        <Link href="">Woman’s Fashion</Link>
        <span className="">
          <HiChevronRight size={24} className="text-xl font-bold" />
        </span>
      </li>
      <li className="flex items-center justify-between">
        <Link href="">Man’s Fashion </Link>
        <span>
          <HiChevronRight size={24} className="text-xl font-bold" />
        </span>
      </li>
      <li className="">
        <Link href="">Electronics</Link>
      </li>
      <li className="">
        <Link href="">Home & Lifestyle</Link>
      </li>
      <li className="">
        <Link href="">Medicine</Link>
      </li>
      <li className="">
        <Link href="">Sports & Outdoor</Link>
      </li>
      <li className="">
        <Link href="">Baby’s & Toys</Link>
      </li>
      <li className="">
        <Link href="">Groceries & Pets</Link>
      </li>
      <li className="">
        <Link href="">Health & Beauty</Link>
      </li>
    </ul>
  );
}

export default SideBar;
