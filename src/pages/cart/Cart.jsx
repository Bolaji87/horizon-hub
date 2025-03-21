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
      <>
        <div className={styles.cart}>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item) => (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />

                    <li key={item.id} className={styles.cartItem}>
                      <span>
                        {item.title} (x{item.quantity})
                      </span>
                      <button className={styles["free-shipping"]}>
                        Free shipping
                      </button>
                      <h2 className={styles["cart-item-h2"]}>{item.title}</h2>
                      <h3 className="cart-item-h3">
                        ${(item.price * 1.2).toFixed(2)}
                      </h3>
                      <h1 className={styles["cart-item-h1"]}>
                        ${item.price.toFixed(2)}
                      </h1>
                      <h4 className={styles["cart-item-h4"]}>
                        {item.description.length > 200
                          ? `${item.description.substring(0, 200)}...`
                          : item.description}
                      </h4>
                      <button onClick={() => onDeleteCartItem(item.id)}>
                        Remove
                      </button>
                    </li>
                  </>
                ))}
              </ul>

              <div className={styles.cartSummary}>
                <button className={styles.clearCart} onClick={onClearCartItems}>
                  Clear Cart 🗑️
                </button>
                <h2>Total: ${totalAmount.toFixed(2)}</h2>
                <span>shipping cost : 0$</span>
                <span>total items : x</span>
                <button onClick={() => navigate("/checkout")}>Checkout</button>
              </div>
            </>
          ) : (
            <h1 className={styles.emptyText}>
              Your cart is empty. Start adding items!
            </h1>
          )}
        </div>
      </>
    </div>
  );
}

export default Cart;
