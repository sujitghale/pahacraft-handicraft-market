
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn, Google } from "lucide-react";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  const handleGoogleLogin = async () => {
    try {
      setIsSubmitting(true);
      setFormError("");
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google authentication error:", error);
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
      
      <div className="mb-6 text-center text-pahacraft-800">
        {type === "login" 
          ? "Sign in with your Google account to continue" 
          : "Create an account using your Google account"}
      </div>
      
      {formError && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">
          {formError}
        </div>
      )}
      
      <Button
        onClick={handleGoogleLogin}
        className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <Google className="h-5 w-5" />
        <span>
          {isSubmitting
            ? "Connecting..."
            : type === "login" ? "Sign in with Google" : "Sign up with Google"}
        </span>
      </Button>
      
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
