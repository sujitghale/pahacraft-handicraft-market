
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative craft-texture bg-pahacraft-beige-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pahacraft-900 mb-6">
            Discover Authentic Handcrafted Treasures
          </h1>
          <p className="text-xl text-pahacraft-800 mb-8">
            Shop unique handicrafts made by talented local artisans. 
            Each piece tells a story of tradition, culture, and exceptional craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-pahacraft-600 hover:bg-pahacraft-700 text-white">
              <Link to="/categories">Explore Categories</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pahacraft-600 text-pahacraft-600 hover:bg-pahacraft-50">
              <Link to="/seller/register">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-pahacraft-beige-200 rounded-tr-full opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-pahacraft-100 rounded-bl-full opacity-30" />
    </div>
  );
};

export default Hero;
