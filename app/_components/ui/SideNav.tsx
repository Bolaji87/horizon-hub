import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <ul className="">
      <li>
        <Link to="">All Products</Link>
      </li>
      <li>
        <Link to={"/"}>Women’s wears</Link>
      </li>
      <li>
        <Link to={"/"}>Men’s wears</Link>
      </li>
      <li>
        <Link to={"/"}>Hijabs</Link>
      </li>
      <li>
        <Link to={"/"}>Men's caps</Link>
      </li>
    </ul>
  );
}

export default SideNav;
