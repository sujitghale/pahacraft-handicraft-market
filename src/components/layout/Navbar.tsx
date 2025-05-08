
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
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
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              className="w-full"
            />
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
            
            <UserMenu />
            <CartIcon />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <CartIcon />
            <button
              onClick={toggleMenu}
              className="text-pahacraft-900 focus:outline-none ml-4"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
