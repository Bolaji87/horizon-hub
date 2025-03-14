import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  totalAmount: 0,
  numOfItems: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add/cart": {
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id
      );
      let updatedCart;

      if (existingItemIndex !== -1) {
        // If item exists, increase quantity
        updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add new item with quantity 1
        updatedCart = [...state.cart, { ...newItem, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedCart,
        numOfItems: updatedCart.reduce((acc, item) => acc + item.quantity, 0), // Total quantity
        totalAmount: updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ), // Total price
      };
    }

    default:
      throw new Error("Unknown action type");
  }
}

function CartProvider({ children }) {
  const [{ cart, totalAmount, numOfItems }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleAddToCart(title, image, price, id) {
    dispatch({ type: "add/cart", payload: { title, image, price, id } });
  }

  return (
    <CartContext.Provider
      value={{ cart, numOfItems, totalAmount, onAddToCart: handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
