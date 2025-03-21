import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import User from "../user/User";
import { useCart } from "../../hooks/useCart";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { numOfItems } = useCart();

  return (
    <header className={styles.navbar}>
      <h2 role="button" onClick={() => navigate("/")}>
        Horizon Hub
      </h2>
      <nav className={styles.listCont}>
        <ul>
          <li className={styles.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/products">Products</Link>
          </li>
          <li className={`${styles.listItem} ${styles.cartItem}`}>
            <span className={styles.numItems}>{numOfItems || ""}</span>
            <Link to="/cart">
              Cart
              <span className={styles.cartLogo}>
                <FaCartShopping />
              </span>
            </Link>
          </li>
          <li className={`${styles.listItem} ${styles.login}`}>
            {isAuthenticated ? <User /> : <Link to="/login">Login</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
