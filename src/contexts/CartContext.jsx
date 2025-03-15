import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalAmount: 0,
  numOfItems: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add/cartItems": {
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
    default:
      throw new Error("Unknown action type");
  }
}
function CartProvider({ children }) {
  const [{ cartItems, totalAmount, numOfItems }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleAddToCart(product) {
    dispatch({ type: "add/cartItems", payload: product });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        numOfItems,
        totalAmount,
        onAddToCart: handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
