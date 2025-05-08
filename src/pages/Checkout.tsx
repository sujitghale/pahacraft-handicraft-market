
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "esewa"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      paymentMethod: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error("Please login to continue with checkout");
      navigate("/login");
      return;
    }
    
    if (cart.items.length === 0) {
      toast.error("Your cart is empty");
      navigate("/cart");
      return;
    }
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // In a real application, this would be an API call to create the order
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate a successful order
      clearCart();
      
      // Navigate to success page
      navigate("/order-success");
      
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold text-pahacraft-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-6">
              <h2 className="text-xl font-semibold text-pahacraft-900 mb-6">Shipping Information</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full address"
                    className="mt-1"
                    required
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <Label htmlFor="city">City/Town *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Enter your postal code"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-pahacraft-900 mb-6">Payment Method</h2>
                
                <RadioGroup 
                  value={formData.paymentMethod} 
                  onValueChange={handleRadioChange}
                  className="mb-8"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="esewa" id="esewa" />
                    <Label htmlFor="esewa" className="flex items-center cursor-pointer">
                      <span className="text-emerald-600 font-medium mr-2">eSewa</span>
                      <span className="text-sm text-pahacraft-beige-600">(Pay using eSewa digital wallet)</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex items-center cursor-pointer">
                      <span className="font-medium mr-2">Cash on Delivery</span>
                      <span className="text-sm text-pahacraft-beige-600">(Pay when you receive the products)</span>
                    </Label>
                  </div>
                </RadioGroup>
                
                <Button
                  type="submit"
                  className="w-full bg-pahacraft-600 hover:bg-pahacraft-700 text-white"
                  disabled={isSubmitting || cart.items.length === 0}
                >
                  {isSubmitting ? "Processing..." : `Pay Rs. ${cart.total}`}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-pahacraft-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.items.length > 0 ? (
                  cart.items.map(item => (
                    <div key={item.productId} className="flex gap-4">
                      <div className="w-16 h-16 flex-shrink-0 bg-pahacraft-beige-50 rounded overflow-hidden">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-pahacraft-900 line-clamp-1">{item.product.name}</div>
                        <div className="text-sm text-pahacraft-beige-600">Qty: {item.quantity}</div>
                        <div className="text-pahacraft-800">Rs. {item.product.price * item.quantity}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p className="text-pahacraft-beige-600">Your cart is empty</p>
                  </div>
                )}
              </div>
              
              <div className="border-t border-pahacraft-beige-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-pahacraft-800">Subtotal</span>
                  <span className="font-medium text-pahacraft-900">Rs. {cart.total}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-pahacraft-800">Shipping</span>
                  <span className="font-medium text-pahacraft-900">Rs. 0</span>
                </div>
                <div className="flex justify-between py-2 border-t border-pahacraft-beige-200 mt-2">
                  <span className="text-lg font-medium text-pahacraft-900">Total</span>
                  <span className="text-lg font-semibold text-pahacraft-900">Rs. {cart.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
