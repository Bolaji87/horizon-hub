import React from "react";
import { LastestArrivalsProps } from "../../lib/types";

function LatestItem({ name, image, price, id }: LastestArrivalsProps) {
  return (
    <li>
      <div className="max-w-62 w-full">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover object-top"
        />
      </div>
    </li>
  );
}

export default LatestItem;
