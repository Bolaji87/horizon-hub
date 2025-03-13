import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Navbar from "./components/Appnav/Navbar";
import Footer from "./components/footer/Footer";
import Spinner from "./UI/Spinner";
const Homepage = lazy(() => import("./pages/Home/Homepage"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="products" element={<Products />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
