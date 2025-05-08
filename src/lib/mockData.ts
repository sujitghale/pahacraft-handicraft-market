
import { Category, Product, User } from "@/types";

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Pottery",
    slug: "pottery",
    imageUrl: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    name: "Textiles",
    slug: "textiles",
    imageUrl: "https://images.unsplash.com/photo-1528927942297-f6b40f342834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    name: "Woodwork",
    slug: "woodwork",
    imageUrl: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    name: "Jewelry",
    slug: "jewelry",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    name: "Paper Crafts",
    slug: "paper-crafts",
    imageUrl: "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    name: "Metalwork",
    slug: "metalwork",
    imageUrl: "https://images.unsplash.com/photo-1569587112025-0d107448e2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "customer",
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "seller",
    createdAt: new Date()
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    createdAt: new Date()
  }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Handcrafted Clay Pot",
    description: "A beautifully handcrafted clay pot made with traditional techniques. Each piece is unique and carries the essence of Nepali craftsmanship.",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pottery",
    stockQuantity: 10,
    sellerId: "2",
    featured: true,
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Handwoven Dhaka Fabric",
    description: "Traditional Dhaka fabric handwoven by skilled artisans. This colorful textile is perfect for making traditional attire or home decor.",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1528927942297-f6b40f342834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    stockQuantity: 15,
    sellerId: "2",
    createdAt: new Date()
  },
  {
    id: "3",
    name: "Wooden Carved Box",
    description: "Intricately carved wooden box made from locally sourced wood. Perfect for storing jewelry, keepsakes, or as a decorative piece.",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Woodwork",
    stockQuantity: 7,
    sellerId: "2",
    featured: true,
    createdAt: new Date()
  },
  {
    id: "4",
    name: "Silver Filigree Earrings",
    description: "Delicate silver filigree earrings handcrafted by skilled jewelers. These lightweight earrings showcase traditional Nepali metalwork.",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jewelry",
    stockQuantity: 20,
    sellerId: "2",
    createdAt: new Date()
  },
  {
    id: "5",
    name: "Lokta Paper Journal",
    description: "Handmade journal crafted from traditional Nepali Lokta paper. Each page has a unique texture and is environmentally sustainable.",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Paper Crafts",
    stockQuantity: 30,
    sellerId: "2",
    createdAt: new Date()
  },
  {
    id: "6",
    name: "Copper Water Vessel",
    description: "Traditional copper water vessel handcrafted by master coppersmiths. Drinking water from copper vessels has health benefits according to Ayurveda.",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1569587112025-0d107448e2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Metalwork",
    stockQuantity: 12,
    sellerId: "2",
    featured: true,
    createdAt: new Date()
  },
  {
    id: "7",
    name: "Ceramic Incense Holder",
    description: "A beautiful ceramic incense holder designed to safely hold and display your favorite incense sticks.",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1602748728219-d2da0687e77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pottery",
    stockQuantity: 25,
    sellerId: "2",
    createdAt: new Date()
  },
  {
    id: "8",
    name: "Handmade Pashmina Shawl",
    description: "Luxuriously soft Pashmina shawl handwoven from the finest Himalayan mountain goat wool.",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1580398813067-4971dcf49e65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    stockQuantity: 8,
    sellerId: "2",
    featured: true,
    createdAt: new Date()
  }
];
