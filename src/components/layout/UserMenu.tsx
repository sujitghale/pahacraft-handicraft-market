
import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const UserMenu: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <>
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
    </>
  );
};

export default UserMenu;
