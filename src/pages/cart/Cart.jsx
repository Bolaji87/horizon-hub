import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, totalAmount, onDeleteCartItem, onClearCartItems } =
    useCart();

  return (
    <div className={styles.container}>
      <h2>
        🛒 Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
        items)
      </h2>
      <div className={styles.cart}>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.cartWrapper}>
              <div className={styles.section}>
                <ul>
                  {cartItems.map((item) => (
                    <>
                      <div className={styles.imageCont}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.image}
                        />
                      </div>
                      <li key={item.id} className={styles.cartItem}>
                        <span>
                          {item.title} (x{item.quantity})
                        </span>
                        <span>${item.price * item.quantity}</span>
                        <button onClick={() => onDeleteCartItem(item.id)}>
                          Remove
                        </button>
                      </li>
                    </>
                  ))}
                </ul>
                <div>
                  <button
                    className={styles.clearCart}
                    onClick={onClearCartItems}
                  >
                    Clear Cart 🗑️
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.cartSummary}>
              <h2>Total: ${totalAmount.toFixed(2)}</h2>
              <span>shipping cost : 0$</span>
              <span>total items : x</span>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
          </>
        ) : (
          <h1>Your cart is empty. Start adding items!</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
