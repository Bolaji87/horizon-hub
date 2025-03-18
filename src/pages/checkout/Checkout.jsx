import React, { useEffect } from "react";
import styles from "./Checkout.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/checkout");
      } else {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate]
  );
  return <div>Checkout</div>;
}

export default Checkout;
