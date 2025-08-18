import React from "react";
import Container from "../ui/Container";
import Arrow from "../ui/Arrow";
import CategorySvg from "../ui/CategorySvg";
import CategoryList from "../ui/CategoryList";

function BrowserCategory() {
  return (
    <Container className="py-6">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <CategorySvg />
          <h1 className="text-2xl font-semibold">Browse By Category</h1>
        </div>
        <Arrow />
      </div>

      <CategoryList />
      <hr className="mt-12 border border-gray-200" />
    </Container>
  );
}

export default BrowserCategory;
