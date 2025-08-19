import { salesProducts } from "@/app/_lib/data";
import React from "react";
import SalesProduct from "./SalesProduct";

function SalesProducts() {
  return (
    <div className="py-3">
      <ul className="flex gap-5">
        {salesProducts.map((product) => (
          <SalesProduct product={product} key={product.id} />
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="mt-10 w-[200px] rounded-sm bg-[#DB4444] px-5 py-2 text-white">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default SalesProducts;
