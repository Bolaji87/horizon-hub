import React from "react";
import TodaySales from "../ui/TodaySales";
import SalesProducts from "../ui/SalesProducts";
import Container from "../ui/Container";

function FlashSales() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-7 py-10 pt-20 lg:px-10">
      <TodaySales />
      <SalesProducts />

      <Container className="mt-6">
        <hr className="border border-gray-200" />
      </Container>
    </div>
  );
}

export default FlashSales;
