
import React from "react";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden pt-16`}
    >
      <div className="container mx-auto px-4 py-5 flex flex-col h-full">
        <button
          className="absolute top-4 right-4 text-pahacraft-900"
          onClick={onClose}
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
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
              onClick={onClose}
            >
              Categories
            </Link>
          </li>
          {isAuthenticated && user?.role === "seller" && (
            <li>
              <Link
                to="/seller/dashboard"
                className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
                onClick={onClose}
              >
                Seller Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/cart"
              className="block py-2 text-lg font-medium text-pahacraft-900 hover:text-pahacraft-600"
              onClick={onClose}
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
                onClick={onClose}
              >
                My Account
              </Link>
              <Button variant="outline" onClick={() => { logout(); onClose(); }} className="w-full">
                Logout
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={onClose}>Login</Link>
              </Button>
              <Button variant="default" asChild className="w-full">
                <Link to="/register" onClick={onClose}>Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
