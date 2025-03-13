import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Spinner from "../../UI/Spinner";
import ProductCard from "../../components/productcard/ProductCard";

// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <div className={styles.products}>
      {products.length > 0 ? (
        <ul>
          {products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard key={product.id} product={product} />
              )
          )}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Products;
