import React from "react";
import { useNavigate } from "react-router-dom";

import NewsLetter from "../../components/newsletter/NewsLetter";
import styles from "./AboutUs.module.css";
import placeholderImage from "../../assets/about-image.jpg"; // Replace with your brand image

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src={placeholderImage}
              alt="Our Store"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Welcome to Horizon Hub</h1>
            <p className={styles.text}>
              At Horizon Hub, we believe fashion is more than just clothing –
              it’s a statement. Our mission is to bring you stylish,
              high-quality, and affordable apparel that fits your lifestyle.
            </p>
            <p className={styles.text}>
              Whether you're looking for trendy outfits, timeless classics, or
              exclusive limited editions, we've got something for everyone.
              Every piece is crafted with care to ensure you look and feel your
              best.
            </p>
            <p className={styles.text}>
              Join our fashion community and experience style like never before!
            </p>
            <button
              className={styles.button}
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <NewsLetter />
    </>
  );
};

export default About;
