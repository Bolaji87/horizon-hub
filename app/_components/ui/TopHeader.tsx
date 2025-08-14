import Link from "next/link";
import React from "react";

function TopHeader() {
  return (
    <div className="w-full bg-black">
      <div className="w-full max-w-6xl mx-auto flex justify-center items-center py-2 px-8 sm:px-6 lg:px-8">
        <p className="text-sm text-center font-medium tracking-wide text-white ">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          </span>{" "}
          <Link href="/" className="font-semibold border-b border-white">
            {" "}
            ShopNow
          </Link>
        </p>
        <span className="text-end ml-50 text-white flex mr-[-300px]">
          <select name="" id="">
            <option value="eng"> English</option>
          </select>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
