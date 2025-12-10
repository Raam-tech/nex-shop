"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getAllCategories, searchProducts } from "@/lib/products";
import { Search, Filter } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const allProducts = getAllProducts();
  const categories = getAllCategories();

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
      if (selectedCategory !== "All") {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }
    }

    return filtered;
  }, [searchQuery, selectedCategory, allProducts]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">
          🛍️ All Products
        </h1>
        <p className="text-gray-400 text-sm">Browse our complete collection of premium products</p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-slate-800 text-white placeholder-gray-400 shadow-md hover:shadow-lg transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-gray-300">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm">Category:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 text-sm ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                  : "bg-slate-700 text-gray-200 border-2 border-slate-600 hover:border-blue-500"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-white shadow-colorful"
                    : "bg-slate-700 text-gray-200 border-2 border-slate-600 hover:border-primary-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-300 font-semibold text-sm">
          Showing <span className="text-blue-400 font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-800 rounded-2xl border border-slate-700">
          <p className="text-white text-lg font-bold mb-2">No products found</p>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

