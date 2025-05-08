
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (type === "register" && password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    
    if (type === "register" && !name.trim()) {
      setFormError("Name is required");
      return;
    }
    
    if (!email.trim()) {
      setFormError("Email is required");
      return;
    }
    
    if (!password) {
      setFormError("Password is required");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      if (type === "login") {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      
      // Redirect after successful authentication
      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error);
      setFormError((error as Error).message || "Authentication failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg border border-pahacraft-beige-200">
      <h2 className="text-2xl font-bold text-center text-pahacraft-900 mb-6">
        {type === "login" ? "Login to Your Account" : "Create an Account"}
      </h2>
      
      <form onSubmit={handleSubmit}>
        {type === "register" && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-pahacraft-800 mb-1">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="border-pahacraft-beige-300 focus:border-pahacraft-500"
              disabled={isSubmitting}
            />
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-pahacraft-800 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border-pahacraft-beige-300 focus:border-pahacraft-500"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-pahacraft-800 mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={type === "login" ? "Enter your password" : "Create a password"}
            className="border-pahacraft-beige-300 focus:border-pahacraft-500"
            disabled={isSubmitting}
          />
        </div>
        
        {type === "register" && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-pahacraft-800 mb-1">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="border-pahacraft-beige-300 focus:border-pahacraft-500"
              disabled={isSubmitting}
            />
          </div>
        )}
        
        {formError && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">
            {formError}
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full bg-pahacraft-600 hover:bg-pahacraft-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? type === "login" ? "Logging In..." : "Registering..."
            : type === "login" ? "Login" : "Register"}
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        {type === "login" ? (
          <p className="text-pahacraft-800">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0 text-pahacraft-600 hover:text-pahacraft-700"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </p>
        ) : (
          <p className="text-pahacraft-800">
            Already have an account?{" "}
            <Button
              variant="link"
              className="p-0 text-pahacraft-600 hover:text-pahacraft-700"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
