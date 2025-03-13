import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { title, price, image, category, description, id } = product;
  return (
    <li className={styles.card}>
      <p>{title}</p>
      <img className={styles.productImg} src={image} alt={title} />
      <p>{price}</p>
      <button>Add to cart</button>
    </li>
  );
}

export default ProductCard;
