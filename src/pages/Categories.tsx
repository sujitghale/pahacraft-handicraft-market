
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { mockCategories, mockProducts } from "@/lib/mockData";
import ProductGrid from "@/components/products/ProductGrid";

const Categories = () => {
  return (
    <Layout>
      <div className="bg-pahacraft-beige-50 craft-texture py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-pahacraft-900 text-center mb-6">
            Shop by Category
          </h1>
          <p className="text-xl text-pahacraft-800 text-center max-w-3xl mx-auto mb-12">
            Discover unique handicrafts crafted by skilled local artisans. Each piece tells a story of heritage and tradition.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {mockCategories.map(category => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group block rounded-lg overflow-hidden border border-pahacraft-beige-200 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-pahacraft-900 group-hover:text-pahacraft-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Render all products */}
        <ProductGrid products={mockProducts} title="All Products" />
      </div>
    </Layout>
  );
};

export default Categories;
