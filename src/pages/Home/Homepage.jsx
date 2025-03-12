import React from "react";
import Hero from "../../components/hero/Hero";
import NewsLetter from "../../components/newsletter/NewsLetter";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <NewsLetter />
    </div>
  );
}

export default Homepage;
