import React from "react";
import styles from "./ProductCard.module.css";
import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
  const { title, price, image, category, description, id } = product;
  const { onAddToCart } = useCart();

  return (
    <li className={styles.card}>
      <p className={styles.title}>{title}</p>
      <img className={styles.productImg} src={image} alt={title} />
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </li>
  );
}

export default ProductCard;
