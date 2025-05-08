
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <Link to="/cart" className="text-pahacraft-900 hover:text-pahacraft-600 relative">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-pahacraft-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
