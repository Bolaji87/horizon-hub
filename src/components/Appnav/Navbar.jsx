import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <h2>Horizon hub</h2>

      <nav className={styles.listCont}>
        <ul>
          <li className={styles.listItem}>
            <a href="">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="">About</a>
          </li>
          <li className={styles.listItem}>
            <a href="">Products</a>
          </li>
          <li className={styles.listItem}>
            <a href="">cart</a>
          </li>
          <li className={`${styles.listItem} ${styles.login}`}>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
