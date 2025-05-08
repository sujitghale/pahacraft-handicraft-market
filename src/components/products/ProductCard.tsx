
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group block rounded-lg overflow-hidden bg-white border border-pahacraft-beige-200 hover:shadow-lg product-card-shadow transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-pahacraft-accent-600 text-white text-xs py-1 px-2 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-pahacraft-900 line-clamp-2 group-hover:text-pahacraft-600">
            {product.name}
          </h3>
        </div>
        
        <div className="mt-2">
          <p className="text-sm text-pahacraft-beige-900 line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-medium text-pahacraft-800">
            Rs. {product.price}
          </span>
          <Button 
            size="sm" 
            variant="outline"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="text-xs text-pahacraft-beige-600">
            {product.stockQuantity > 0 
              ? `${product.stockQuantity} in stock` 
              : "Out of stock"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
