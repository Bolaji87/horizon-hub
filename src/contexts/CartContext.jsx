import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalAmount: 0,
  numOfItems: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add/cart": {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cartItems.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...newItem, quantity: 1 }];
      }
      return {
        ...state,
        cartItems: updatedCart,
        numOfItems: updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }
    case "delete/cart": {
      const newItemId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItemId
      );
      let updatedCart;
      if (existingItem) {
        if (existingItem.quantity > 1) {
          updatedCart = state.cartItems.map((item) =>
            item.id === newItemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          updatedCart = state.cartItems.filter((item) => item.id !== newItemId);
        }
      } else {
        updatedCart = [...state.cartItems];
      }

      return {
        ...state,
        cartItems: updatedCart,
        numOfItems: updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }
    case "clear/cartItems":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}
function CartProvider({ children }) {
  const [{ cartItems, totalAmount, numOfItems }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleAddToCartItems(product) {
    dispatch({ type: "add/cart", payload: product });
  }

  function handleDeleteCart(id) {
    dispatch({ type: "delete/cart", payload: id });
  }
  function handleClearCartItems() {
    dispatch({ type: "clear/cartItems" });
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        numOfItems,
        totalAmount,
        onAddToCart: handleAddToCartItems,
        onDeleteCartItem: handleDeleteCart,
        onClearCartItems: handleClearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
