import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

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
          <li className={styles.listItem}>
            <Link to="/cart">Cart</Link>
          </li>
          <li className={`${styles.listItem} ${styles.login}`}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
