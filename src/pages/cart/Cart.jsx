import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";

function Cart() {
  const { cartItems, totalAmount, onDeleteCartItem } = useCart();

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <>
          <h2>
            🛒 Your Cart (
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
          </h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span>
                  {item.title} (x{item.quantity})
                </span>
                <img src={item.image} alt={item.title} />
                <span>${item.price * item.quantity}</span>
                <button onClick={() => onDeleteCartItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
          <div>
            <button className={styles.clearCart}>Clear Cart 🗑️</button>
          </div>
        </>
      ) : (
        <h1>Your cart is empty. Start adding items!</h1>
      )}
    </div>
  );
}

export default Cart;
