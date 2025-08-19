import React from "react";
import Container from "../ui/Container";
import OurProductsSvg from "../ui/OurProductsSvg";
import Arrow from "../ui/Arrow";
import { exploreProducts } from "@/app/_lib/data";
import ExploProduct from "../ui/ExploProduct";

function ExploreProducts() {
  return (
    <Container className="py-10">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <OurProductsSvg />
          <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        </div>

        <Arrow />
      </div>

      <ul className="mt-14 grid grid-cols-4 gap-x-6 gap-y-10">
        {exploreProducts.map((product) => (
          <ExploProduct product={product} key={product.id} />
        ))}
      </ul>
      <div className="mt-14 flex justify-center">
        <button className="rounded-sm bg-[#df4444] px-5 py-2 text-white">
          View All Products
        </button>
      </div>
    </Container>
  );
}

export default ExploreProducts;
