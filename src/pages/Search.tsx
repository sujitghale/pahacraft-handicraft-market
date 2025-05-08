
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { mockProducts } from "@/lib/mockData";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<Product[]>([]);
  
  useEffect(() => {
    if (query) {
      const searchResults = mockProducts.filter(product => {
        const lowerCaseQuery = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery) ||
          product.category.toLowerCase().includes(lowerCaseQuery)
        );
      });
      
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold text-pahacraft-900 mb-8">
          {query ? `Search Results for "${query}"` : "Search Products"}
        </h1>
        
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search for products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-pahacraft-beige-200 focus:border-pahacraft-500 pr-10"
              />
            </div>
            <Button
              type="submit"
              className="bg-pahacraft-600 hover:bg-pahacraft-700 text-white"
            >
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
        
        {query ? (
          <>
            <div className="mb-6">
              <p className="text-pahacraft-800">
                Found {results.length} {results.length === 1 ? "result" : "results"} for "{query}"
              </p>
            </div>
            
            <ProductGrid 
              products={results} 
              emptyMessage={`No products found for "${query}". Try a different search term.`}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-pahacraft-beige-600">
              Enter a search term to find products
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
