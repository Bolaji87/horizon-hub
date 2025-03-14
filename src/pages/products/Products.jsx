import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Spinner from "../../UI/Spinner";
import ProductCard from "../../components/productcard/ProductCard";
import Error from "../../UI/Error";

// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getProducts() {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok)
          throw new Error("There was an error fetching products");
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);
  return (
    <div className={styles.products}>
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {!isLoading && !error && products.length > 0 && (
        <ul>
          {products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard key={product.id} product={product} />
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default Products;
