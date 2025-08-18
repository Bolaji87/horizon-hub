"use client";
import { SalesProductProps } from "@/app/_lib/types";
import React from "react";

function SalesProduct({ product }: SalesProductProps) {
  const { name, price, image, id, rating, prevPrice } = product;
  return (
    <li className="flex flex-col gap-4">
      <img src={image} alt={name} />
      <div className="flex flex-col gap-2 py-2">
        <h1 className="text-sm font-semibold">{name}</h1>

        <div className="flex items-center gap-4 text-sm font-semibold">
          <span className="text-red-500">${price}</span>
          <span className="text-gray-500">${prevPrice}</span>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500">({rating})</span>
        </div>
      </div>
    </li>
  );
}

export default SalesProduct;
