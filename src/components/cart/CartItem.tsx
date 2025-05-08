
import React from "react";
import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < product.stockQuantity) {
      updateQuantity(product.id, quantity + 1);
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0 && newQuantity <= product.stockQuantity) {
      updateQuantity(product.id, newQuantity);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-pahacraft-beige-200 gap-4">
      <div className="w-full md:w-24 h-24 flex-shrink-0">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>
      
      <div className="flex-grow">
        <Link 
          to={`/product/${product.id}`}
          className="text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600 transition-colors"
        >
          {product.name}
        </Link>
        <p className="text-sm text-pahacraft-beige-600 mt-1 line-clamp-1">
          {product.description}
        </p>
        <div className="text-pahacraft-800 mt-1">
          Rs. {product.price}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <Input
          type="number"
          min="1"
          max={product.stockQuantity}
          value={quantity}
          onChange={handleQuantityChange}
          className="w-14 h-8 text-center"
        />
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full"
          onClick={handleIncrease}
          disabled={quantity >= product.stockQuantity}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-lg font-medium text-pahacraft-900">
          Rs. {product.price * quantity}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-pahacraft-beige-600 hover:text-pahacraft-600"
          onClick={() => removeItem(product.id)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
