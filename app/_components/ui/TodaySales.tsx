import React from "react";
import SalesCountDown from "./SalesCountDown";
import Arrow from "./Arrow";

function TodaySales() {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-end gap-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <svg
              width="20"
              height="40"
              viewBox="0 0 20 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>
            <p className="text-[#DB4444]">Today’s</p>
          </div>
          <h1 className="text-2xl font-semibold">Flash Sales</h1>
        </div>
        <SalesCountDown />
      </div>
      <div className="pr-24">
        <Arrow />
      </div>
    </div>
  );
}

export default TodaySales;
