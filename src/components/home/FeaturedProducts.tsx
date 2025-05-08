
import React from "react";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  // Filter featured products
  const featuredProducts = products.filter((product) => product.featured);
  
  return (
    <section className="py-12 md:py-16 bg-pahacraft-beige-50 craft-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pahacraft-900 mb-2">
            Featured Handicrafts
          </h2>
          <p className="text-lg text-pahacraft-800">
            Handpicked traditional crafts from our talented artisans
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} emptyMessage="No featured products at the moment" />
      </div>
    </section>
  );
};

export default FeaturedProducts;
