import React from "react";
import Container from "../ui/Container";
import ThisMonthSvg from "../ui/ThisMonthSvg";
import { bestSellingProducts } from "@/app/_lib/data";
import BestSellingProduct from "../ui/BestSellingProduct";

function BestSelling() {
  return (
    <Container className="py-10">
      <div className="flex items-end justify-between">
        <div className="flex flex-col justify-end gap-4">
          <ThisMonthSvg />
          <h1 className="text-3xl font-semibold">Best Selling Products</h1>
        </div>

        <button className="w-[159px] rounded-sm bg-[#df4444] px-5 py-3 text-white">
          View All
        </button>
      </div>

      <ul className="mt-10 flex justify-between gap-5">
        {bestSellingProducts.map((product) => (
          <BestSellingProduct product={product} key={product.id} />
        ))}
      </ul>
    </Container>
  );
}

export default BestSelling;
