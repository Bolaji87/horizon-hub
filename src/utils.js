const BASE_URL = `https://fakestoreapi.com`;

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data;
}

export async function fetchProductsCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  const data = await res.json();
  return data;
}

export const ALLOWED_CATEGORIES = {
  MEN: "men's clothing",
  WOMEN: "women's clothing",
};
