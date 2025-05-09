import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

// import styles from "./Navbar.module.css";
import User from "../user/User";
import Button from "../../UI/Button";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { numOfItems } = useCart();

  return (
    <header className="shadow-black/12 flex items-center justify-between bg-pink-300 px-6 py-3 font-semibold text-purple-900 shadow-lg">
      <h2
        className="text-3xl font-normal"
        role="button"
        onClick={() => navigate("/")}
      >
        Horizon Hub
      </h2>
      <nav>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <span>{numOfItems || ""}</span>
            <Link to="/cart">
              Cart
              <span>{/* <FaCartShopping /> */}</span>
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <User />
            ) : (
              <Button type="cto" to="/login">
                Login
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
