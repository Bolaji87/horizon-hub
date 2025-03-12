import React from "react";
import { FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <h1>Horizon Hub</h1>
        <ul>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Products</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">About us</a>
          </li>
          <li className={styles.listItem}>
            <a href="#">Login</a>
          </li>
        </ul>
        <div className={styles.socials}>
          <div className={styles.social}>
            <FaFacebook className={styles.facebook} />
          </div>
          <div className={styles.social}>
            <GrInstagram className={styles.instagram} />
          </div>
          <div className={styles.social}>
            <FaTiktok className={styles.tiktok} />
          </div>
          <div className={styles.social}>
            <FaXTwitter className={styles.twitter} />
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.text}>
        &copy; Copyright {new Date().getFullYear()} by{" "}
        <strong>Horizon Hub</strong> inc . All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
