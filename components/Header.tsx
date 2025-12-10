"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { items } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-slate-800/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b-2 border-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
            NexShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1 max-w-2xl mx-8">
            <Link
              href="/"
              className="text-gray-200 hover:text-blue-400 font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-slate-700"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-200 hover:text-blue-400 font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-slate-700"
            >
              Products
            </Link>
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-slate-700 text-white placeholder-gray-400 shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            </form>
            <Link
              href="/cart"
              className="relative text-gray-200 hover:text-blue-400 transition-all p-2 rounded-xl hover:bg-slate-700"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-200 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-gray-200 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

