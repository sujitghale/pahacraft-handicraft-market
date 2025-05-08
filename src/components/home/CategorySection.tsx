
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pahacraft-900 mb-2">
            Shop by Category
          </h2>
          <p className="text-lg text-pahacraft-800">
            Discover a world of unique handicrafts
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h3 className="text-lg font-medium text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/categories"
            className="text-pahacraft-600 font-medium hover:text-pahacraft-800 transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
