import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Navbar from "./components/Appnav/Navbar";
import Footer from "./components/footer/Footer";
import Spinner from "./UI/Spinner";
import { CartProvider } from "./contexts/CartContext";

const Homepage = lazy(() => import("./pages/Home/Homepage"));
const Products = lazy(() => import("./pages/products/Products"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const PageNotFound = lazy(() => import("./pages/notfound/PageNotFound"));

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </CartProvider>
  );
}

export default App;
