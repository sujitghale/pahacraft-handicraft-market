
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

interface SellerLayoutProps {
  children: React.ReactNode;
}

const SellerLayout: React.FC<SellerLayoutProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if user is authenticated and is a seller
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "seller") {
    return <Navigate to="/" replace />;
  }

  // Helper for determining active link
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="p-4">
              <h2 className="font-bold text-lg mb-4 text-pahacraft-900">Seller Dashboard</h2>
              <NavigationMenu orientation="vertical" className="max-w-none w-full">
                <NavigationMenuList className="flex flex-col space-y-2 w-full">
                  <NavigationMenuItem className="w-full">
                    <Link 
                      to="/seller/dashboard" 
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${isActive("/seller/dashboard") ? "bg-muted font-medium" : ""}`}
                    >
                      Dashboard
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link 
                      to="/seller/products" 
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${isActive("/seller/products") ? "bg-muted font-medium" : ""}`}
                    >
                      Products
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link 
                      to="/seller/orders" 
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${isActive("/seller/orders") ? "bg-muted font-medium" : ""}`}
                    >
                      Orders
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link 
                      to="/seller/account" 
                      className={`${navigationMenuTriggerStyle()} w-full justify-start ${isActive("/seller/account") ? "bg-muted font-medium" : ""}`}
                    >
                      My Account
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLayout;
