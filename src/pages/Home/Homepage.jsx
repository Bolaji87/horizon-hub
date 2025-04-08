import React from "react";
import Navbar from "../../components/Appnav/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <div className="h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
