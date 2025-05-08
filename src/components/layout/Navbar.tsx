
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      closeMenu();
    }
  };

  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm border-b border-pahacraft-beige-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-pahacraft-700 font-bold text-2xl">
              Pahacraft
            </span>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center max-w-md w-full mx-4">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-pahacraft-beige-200 focus:border-pahacraft-400"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/categories" className="text-pahacraft-900 hover:text-pahacraft-600">
              Categories
            </Link>
            
            {isAuthenticated && user?.role === "seller" && (
              <Link to="/seller/dashboard" className="text-pahacraft-900 hover:text-pahacraft-600">
                Seller Dashboard
              </Link>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/account"
                  className="flex items-center text-pahacraft-900 hover:text-pahacraft-600"
                >
                  <User className="h-4 w-4 mr-1" />
                  <span>{user?.name}</span>
                </Link>
                <Button variant="ghost" onClick={logout}>Logout</Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
            
            <Link to="/cart" className="text-pahacraft-900 hover:text-pahacraft-600 relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pahacraft-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5 text-pahacraft-900" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pahacraft-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-pahacraft-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden pt-16`}
      >
        <div className="container mx-auto px-4 py-5 flex flex-col h-full">
          <button
            className="absolute top-4 right-4 text-pahacraft-900"
            onClick={closeMenu}
          >
            <X className="h-6 w-6" />
          </button>
          
          <form onSubmit={handleSearch} className="mb-6 mt-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-pahacraft-beige-200"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </form>
          
          <ul className="space-y-4 flex-1">
            <li>
              <Link
                to="/"
                className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                onClick={closeMenu}
              >
                Categories
              </Link>
            </li>
            {isAuthenticated && user?.role === "seller" && (
              <li>
                <Link
                  to="/seller/dashboard"
                  className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                  onClick={closeMenu}
                >
                  Seller Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/cart"
                className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                onClick={closeMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
          
          <div className="py-4 border-t border-pahacraft-beige-200">
            {isAuthenticated ? (
              <div className="space-y-4">
                <Link
                  to="/account"
                  className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                  onClick={closeMenu}
                >
                  My Account
                </Link>
                <Button variant="outline" onClick={() => { logout(); closeMenu(); }} className="w-full">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={closeMenu}>Login</Link>
                </Button>
                <Button variant="default" asChild className="w-full">
                  <Link to="/register" onClick={closeMenu}>Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
