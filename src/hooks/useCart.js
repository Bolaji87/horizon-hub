import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used out of CartProvider");
  return context;
}
