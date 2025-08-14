import React from "react";
import { LastestArrivalsProps } from "@/app/_lib/types";
import Image from "next/image";

function LatestItem({ name, image, price, id }: LastestArrivalsProps) {
  return (
    <li>
      <div className="w-full max-w-72">
        <img
          width={100}
          height={100}
          src={image}
          alt={name}
          className="h-56 w-full object-cover object-top"
        />
      </div>
    </li>
  );
}

export default LatestItem;
