
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { Cart, CartItem, Product } from "@/types";
import { toast } from "sonner";

type CartAction = 
  | { type: "ADD_ITEM"; product: Product; quantity: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" };

const initialState: Cart = {
  items: [],
  total: 0
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action;
      const existingItemIndex = state.items.findIndex(item => item.productId === product.id);

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
        
        if (newQuantity <= product.stockQuantity) {
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: newQuantity
          };
          
          return {
            ...state,
            items: updatedItems,
            total: calculateTotal(updatedItems)
          };
        } else {
          toast.error(`Sorry, only ${product.stockQuantity} items available in stock`);
          return state;
        }
      } else {
        if (quantity <= product.stockQuantity) {
          const newItems = [
            ...state.items,
            { productId: product.id, quantity, product }
          ];
          
          return {
            ...state,
            items: newItems,
            total: calculateTotal(newItems)
          };
        } else {
          toast.error(`Sorry, only ${product.stockQuantity} items available in stock`);
          return state;
        }
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(item => item.productId !== action.productId);
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action;
      const itemIndex = state.items.findIndex(item => item.productId === productId);
      
      if (itemIndex >= 0) {
        const product = state.items[itemIndex].product;
        
        if (quantity <= 0) {
          const updatedItems = state.items.filter(item => item.productId !== productId);
          return {
            ...state,
            items: updatedItems,
            total: calculateTotal(updatedItems)
          };
        }
        
        if (quantity <= product.stockQuantity) {
          const updatedItems = [...state.items];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity
          };
          
          return {
            ...state,
            items: updatedItems,
            total: calculateTotal(updatedItems)
          };
        } else {
          toast.error(`Sorry, only ${product.stockQuantity} items available in stock`);
          return state;
        }
      }
      
      return state;
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

type CartContextType = {
  cart: Cart;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Add to cart action
  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
    toast.success(`${product.name} added to cart`);
  };

  // Remove from cart action
  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
    toast.info("Item removed from cart");
  };

  // Update quantity action
  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  };

  // Clear cart action
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
