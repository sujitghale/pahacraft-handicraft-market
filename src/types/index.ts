
export type User = {
  id: string;
  name: string;
  email: string;
  role: "customer" | "seller" | "admin";
  createdAt: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stockQuantity: number;
  sellerId: string;
  featured?: boolean;
  createdAt: Date;
};

export type CartItem = {
  productId: string;
  quantity: number;
  product: Product;
};

export type Cart = {
  items: CartItem[];
  total: number;
};

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: Date;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
};
