import { BestSellingProductProps } from "@/app/_lib/types";
import React from "react";

function BestSellingProduct({ product }: BestSellingProductProps) {
  const { name, id, image, price, prevPrice, rating } = product;

  return (
    <li>
      <img src={image} alt={name} />

      <div className="mt-4 flex flex-col gap-2 py-2">
        <h1 className="text-sm font-semibold">{name}</h1>

        <div className="flex items-center gap-4 text-sm font-semibold">
          <span className="text-red-500">${price}</span>
          {prevPrice > 0 && <span className="text-gray-500">${prevPrice}</span>}
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500">({rating})</span>
        </div>
      </div>
    </li>
  );
}

export default BestSellingProduct;
