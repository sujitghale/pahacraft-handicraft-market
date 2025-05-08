
import React from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold text-pahacraft-900 mb-8">Your Cart</h1>
        
        {cart.items.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-6">
              {/* Cart Header (desktop only) */}
              <div className="hidden md:flex justify-between items-center pb-4 border-b border-pahacraft-beige-200 text-pahacraft-beige-600 font-medium">
                <span className="w-24">Product</span>
                <span className="flex-grow">Details</span>
                <span className="w-28 text-center">Quantity</span>
                <span className="w-32 text-right">Total</span>
              </div>
              
              {/* Cart Items */}
              <div className="divide-y divide-pahacraft-beige-200">
                {cart.items.map(item => (
                  <CartItem key={item.productId} item={item} />
                ))}
              </div>
              
              {/* Cart Actions */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                <Button
                  variant="outline"
                  className="mb-4 md:mb-0"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
                
                <div className="flex flex-col items-end">
                  <div className="text-xl font-semibold text-pahacraft-900 mb-2">
                    Total: Rs. {cart.total}
                  </div>
                  <Button 
                    className="bg-pahacraft-600 hover:bg-pahacraft-700 text-white w-full md:w-auto"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/categories"
                className="text-pahacraft-600 hover:text-pahacraft-800 flex items-center"
              >
                ← Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-12 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingCart className="h-16 w-16 text-pahacraft-beige-400" />
            </div>
            <h2 className="text-2xl font-semibold text-pahacraft-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-pahacraft-beige-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild className="bg-pahacraft-600 hover:bg-pahacraft-700 text-white">
              <Link to="/categories">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
