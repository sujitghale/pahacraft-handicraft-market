
import React from "react";
import SellerLayout from "@/components/layout/SellerLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { ShoppingBag, Package, Clock } from "lucide-react";

const SellerDashboard = () => {
  const { user } = useAuth();

  // In a real application, these would be fetched from an API
  const mockStats = {
    totalProducts: 12,
    pendingOrders: 5,
    completedOrders: 8
  };

  return (
    <SellerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-pahacraft-900">Welcome back, {user?.name}</h1>
        <p className="text-pahacraft-600">Manage your products and orders from this dashboard.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-pahacraft-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalProducts}</div>
              <p className="text-xs text-pahacraft-600">Products listed for sale</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-pahacraft-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.pendingOrders}</div>
              <p className="text-xs text-pahacraft-600">Orders waiting to be fulfilled</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-pahacraft-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.completedOrders}</div>
              <p className="text-xs text-pahacraft-600">Successfully fulfilled orders</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-pahacraft-600 rounded"></div>
                <div>
                  <p className="font-medium text-sm">New order received</p>
                  <p className="text-xs text-pahacraft-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-pahacraft-600 rounded"></div>
                <div>
                  <p className="font-medium text-sm">Product stock updated</p>
                  <p className="text-xs text-pahacraft-600">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-pahacraft-600 rounded"></div>
                <div>
                  <p className="font-medium text-sm">New product added</p>
                  <p className="text-xs text-pahacraft-600">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SellerLayout>
  );
};

export default SellerDashboard;
