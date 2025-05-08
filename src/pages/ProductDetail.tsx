
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockProducts } from "@/lib/mockData";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // Find the product from mock data
  const product = mockProducts.find(p => p.id === id);
  
  // If product not found, show error
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-pahacraft-900 mb-4">Product Not Found</h1>
            <p className="text-pahacraft-800 mb-6">
              The product you are looking for does not exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    } else {
      toast.error(`Sorry, only ${product.stockQuantity} items available in stock`);
    }
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  // Find more products from the same category
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/categories" className="text-pahacraft-600 hover:text-pahacraft-800 flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-pahacraft-beige-50">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-pahacraft-900 mb-2">
                {product.name}
              </h1>
              
              <div className="text-2xl font-semibold text-pahacraft-700 mb-4">
                Rs. {product.price}
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-pahacraft-beige-600 mb-1">
                  Category: <span className="text-pahacraft-800">{product.category}</span>
                </div>
                <div className="text-sm text-pahacraft-beige-600 mb-1">
                  Availability: 
                  <span className={`${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-600'} ml-1`}>
                    {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-b py-6 border-pahacraft-beige-200 mb-6">
                <p className="text-pahacraft-800 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Quantity and Add to Cart */}
              {product.stockQuantity > 0 && (
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-pahacraft-800 mb-2">
                    Quantity
                  </label>
                  
                  <div className="flex items-center mb-6">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleDecrease}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max={product.stockQuantity}
                      value={quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 1 && value <= product.stockQuantity) {
                          setQuantity(value);
                        }
                      }}
                      className="w-16 h-10 mx-2 text-center"
                    />
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleIncrease}
                      disabled={quantity >= product.stockQuantity}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-pahacraft-600 hover:bg-pahacraft-700 text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-pahacraft-900 mb-6">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="group block rounded-lg overflow-hidden bg-white border border-pahacraft-beige-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-pahacraft-900 line-clamp-1 group-hover:text-pahacraft-600">
                      {relatedProduct.name}
                    </h3>
                    <div className="mt-2 text-lg font-medium text-pahacraft-800">
                      Rs. {relatedProduct.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
