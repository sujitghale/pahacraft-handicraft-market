
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OrderSuccess = () => {
  // Generate a random order number
  const orderNumber = `PH${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-pahacraft-beige-200 p-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-pahacraft-900 text-center mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-pahacraft-800 text-center mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="bg-pahacraft-beige-50 rounded-md p-6 mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-pahacraft-beige-600">Order Number</span>
              <span className="font-medium text-pahacraft-900">{orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-pahacraft-beige-600">Date</span>
              <span className="font-medium text-pahacraft-900">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-pahacraft-beige-600">Payment Method</span>
              <span className="font-medium text-pahacraft-900">eSewa</span>
            </div>
          </div>
          
          <p className="text-pahacraft-800 text-center mb-8">
            You will receive an email confirmation shortly with order details.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-pahacraft-600 text-pahacraft-600 hover:bg-pahacraft-50">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild className="bg-pahacraft-600 hover:bg-pahacraft-700 text-white">
              <Link to="/categories">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
