import React from "react";
import Container from "./Container";

const categoryItems = [
  "phone",
  "computers",
  "smartwatch",
  "camera",
  "headphones",
  "gaming",
];

function CategoryList() {
  return (
    <div className="mt-7">
      <ul className="flex items-center gap-6">
        {categoryItems.map((item, key) => (
          <li key={key}>
            <img src={`/browse-category/${item}.png`} alt={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
