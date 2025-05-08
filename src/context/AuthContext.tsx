import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { mockUsers } from "@/lib/mockData";
import { toast } from "sonner";

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
};

type AuthAction = 
  | { type: "LOGIN_SUCCESS"; user: User }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; isLoading: boolean };

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: true
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        isLoading: false
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loginWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for stored user on mount
  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: "SET_LOADING", isLoading: true });
      
      try {
        const storedUser = localStorage.getItem("pahacraft_user");
        if (storedUser) {
          const user = JSON.parse(storedUser) as User;
          dispatch({ type: "LOGIN_SUCCESS", user });
        } else {
          dispatch({ type: "SET_LOADING", isLoading: false });
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        dispatch({ type: "SET_LOADING", isLoading: false });
      }
    };

    checkAuth();
  }, []);

  // Login function (mock implementation)
  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: "SET_LOADING", isLoading: true });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data
      const user = mockUsers.find(user => user.email === email);
      
      if (user && password === "password") { // For demo purposes, password is always "password"
        localStorage.setItem("pahacraft_user", JSON.stringify(user));
        dispatch({ type: "LOGIN_SUCCESS", user });
        toast.success("Login successful!");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      dispatch({ type: "SET_LOADING", isLoading: false });
      toast.error("Login failed: Invalid email or password");
      throw error;
    }
  };

  // Register function (mock implementation)
  const register = async (name: string, email: string, password: string) => {
    try {
      dispatch({ type: "SET_LOADING", isLoading: true });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = mockUsers.find(user => user.email === email);
      
      if (existingUser) {
        throw new Error("Email already in use");
      }
      
      // Create new user (in real app, this would be an API call)
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        role: "customer",
        createdAt: new Date()
      };
      
      // In a real app, we would save the user to the database here
      localStorage.setItem("pahacraft_user", JSON.stringify(newUser));
      dispatch({ type: "LOGIN_SUCCESS", user: newUser });
      toast.success("Registration successful!");
    } catch (error) {
      dispatch({ type: "SET_LOADING", isLoading: false });
      toast.error(`Registration failed: ${(error as Error).message}`);
      throw error;
    }
  };

  // Google login function (mock implementation)
  const loginWithGoogle = async () => {
    try {
      dispatch({ type: "SET_LOADING", isLoading: true });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock Google user
      const googleUser: User = {
        id: `user-google-${Date.now()}`,
        name: "Google User",
        email: "user@gmail.com",
        role: "customer",
        createdAt: new Date()
      };
      
      // Save user to local storage
      localStorage.setItem("pahacraft_user", JSON.stringify(googleUser));
      dispatch({ type: "LOGIN_SUCCESS", user: googleUser });
      toast.success("Google login successful!");
    } catch (error) {
      dispatch({ type: "SET_LOADING", isLoading: false });
      toast.error(`Google login failed: ${(error as Error).message}`);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("pahacraft_user");
    dispatch({ type: "LOGOUT" });
    toast.info("You have been logged out");
  };

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        isLoading: state.isLoading,
        login,
        register,
        logout,
        loginWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
