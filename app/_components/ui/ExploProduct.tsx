import { exploreProductsProps } from "@/app/_lib/types";
import React from "react";

function ExploProduct({ product }: exploreProductsProps) {
  const { name, id, price, rating, image } = product;
  return (
    <li>
      <img src={image} alt={name} />
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-sm font-semibold">{name}</h2>

        <div className="flex items-center gap-3 text-sm font-semibold">
          <div className="text-red-500">${price}</div>
          <div className="flex items-center gap-3">
            ⭐⭐⭐⭐ <span className="text-gray-500">({rating})</span>{" "}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ExploProduct;
