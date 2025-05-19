import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { LogOut, Search, Settings, ShoppingBag, User, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

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
  const { user, logout } = useAuth();

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

        <nav className="flex-1">
          <ul className="space-y-4">
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
            {user?.email?.endsWith("@seller.com") && (
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
        </nav>

        <div className="mt-auto">
          <Separator className="my-4" />
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{user.displayName}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/account" onClick={onClose}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/orders" onClick={onClose}>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/settings" onClick={onClose}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={onClose}>
                  Login
                </Link>
              </Button>
              <Button variant="default" asChild className="w-full">
                <Link to="/register" onClick={onClose}>
                  Register
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
