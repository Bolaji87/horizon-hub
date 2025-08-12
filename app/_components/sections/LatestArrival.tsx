"use client";
import React from "react";
import { latestArrivalsProducts } from "@/app/_lib/data";
import LatestItem from "@/app/_components/ui/LatestItem";
import Container from "@/app/_components/ui/Container";

function LatestArrival() {
  return (
    <Container className="md:pt-12">
      <h1>Latest Arrivals</h1>
      <div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {latestArrivalsProducts.map((item) => (
            <LatestItem
              name={item.name}
              image={item.image}
              price={item.price}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default LatestArrival;
