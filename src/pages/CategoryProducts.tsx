
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { mockCategories, mockProducts } from "@/lib/mockData";
import ProductGrid from "@/components/products/ProductGrid";
import { ChevronLeft } from "lucide-react";

const CategoryProducts = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the category
  const category = mockCategories.find(cat => cat.slug === slug);
  
  // Filter products by category
  const categoryProducts = mockProducts.filter(
    product => category && product.category.toLowerCase() === category.name.toLowerCase()
  );
  
  // If category not found
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-pahacraft-900 mb-4">Category Not Found</h1>
            <p className="text-pahacraft-800 mb-6">
              The category you are looking for does not exist.
            </p>
            <Link 
              to="/categories"
              className="text-pahacraft-600 hover:text-pahacraft-800"
            >
              Back to Categories
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-pahacraft-beige-50 craft-texture py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/categories" className="text-pahacraft-600 hover:text-pahacraft-800 flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to All Categories
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-pahacraft-900 mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-pahacraft-800 max-w-3xl mb-4">
            Explore our collection of unique {category.name.toLowerCase()} crafted by skilled artisans.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {categoryProducts.length > 0 ? (
          <ProductGrid 
            products={categoryProducts} 
            title={`All ${category.name} Products`}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-pahacraft-beige-600">
              No products found in this category. Check back soon!
            </p>
            <Link 
              to="/categories"
              className="mt-4 inline-block text-pahacraft-600 hover:text-pahacraft-800"
            >
              Explore Other Categories
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProducts;
