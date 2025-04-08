import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Products.module.css";
import Spinner from "../../UI/Spinner";
import ProductCard from "../../components/productcard/ProductCard";
import Error from "../../UI/Error";

import {
  ALLOWED_CATEGORIES,
  fetchProducts,
  fetchProductsCategory,
} from "../../utils";
import Navbar from "../../components/Appnav/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { category } = useParams();

  useEffect(
    function () {
      if (!category) {
        async function getProducts() {
          try {
            setIsLoading(true);
            setError("");
            const response = await fetchProducts();
            if (!response)
              throw new Error("There was an error fetching products");
            setProducts(response);
            setAllProducts(response);
            setIsLoading(false);
          } catch (err) {
            setError(err.message);
            setIsLoading(false);
          }
        }
        getProducts();
      } else {
        async function getProductsCategory() {
          try {
            setIsLoading(true);
            setError("");
            const response = await fetchProductsCategory(category);
            if (!response)
              throw new Error("There was an error fetching products");
            setProducts(response);
            setIsLoading(false);
          } catch (err) {
            setError(err.message);
            setIsLoading(false);
          }
        }
        getProductsCategory();
      }
    },
    [category],
  );

  function handleFilterProducts(productCategory = null) {
    const filteredProducts = allProducts.filter(
      (product) => product.category === productCategory,
    );

    setProducts(productCategory ? filteredProducts : allProducts);
  }

  return (
    <>
      <Navbar />
      <div className={styles.productsCont}>
        <div className={styles.category}>
          <div className={styles.all} onClick={() => handleFilterProducts()}>
            All
          </div>
          <div
            className={styles.women}
            onClick={() => handleFilterProducts(ALLOWED_CATEGORIES.WOMEN)}
          >
            Abayas
          </div>
          <div
            className={styles.men}
            onClick={() => handleFilterProducts(ALLOWED_CATEGORIES.MEN)}
          >
            Jalabs
          </div>
        </div>
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
                  ),
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
