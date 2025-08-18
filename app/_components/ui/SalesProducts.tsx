import { salesProducts } from "@/app/_lib/data";
import React from "react";
import SalesProduct from "./SalesProduct";

function SalesProducts() {
  return (
    <div className="py-3">
      <ul className="flex justify-between">
        {salesProducts.map((product) => (
          <SalesProduct product={product} key={product.id} />
        ))}
      </ul>

      <button className="mt-10 w-[230px] bg-[#DB4444] px-5 py-3 text-white">
        View All Products
      </button>
    </div>
  );
}

export default SalesProducts;
