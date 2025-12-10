import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getAllProducts } from "@/lib/products";
import { ShoppingBag, Shield, Truck, RotateCcw } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <section className="text-center py-16 mb-12 rounded-2xl shadow-colorful-lg relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=90&auto=format')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/75 via-purple-600/70 to-indigo-600/75"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-4">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-4">
              <span className="text-white font-semibold text-sm">✨ Premium Quality Products</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in drop-shadow-2xl">
            Shop Smart, <br />
            <span className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-2xl inline-block mt-2">
              Live Better
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-semibold drop-shadow-xl">
            Your one-stop destination for premium electronics, fashion, home essentials, and sports gear.
            <span className="block mt-2 text-base font-normal">
              Fast shipping • Secure payments • 30-day returns
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link
              href="/products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-white/95 transition-all transform hover:scale-105 shadow-xl text-base"
            >
              🛍️ Start Shopping
            </Link>
            <Link
              href="/products"
              className="inline-block bg-white/25 backdrop-blur-md text-white border-2 border-white/50 px-8 py-3 rounded-xl font-bold hover:bg-white/35 transition-all transform hover:scale-105 text-base shadow-lg"
            >
              🔍 Browse Categories
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <TrustBadge icon="⭐" text="4.8/5 Rating" subtext="2,500+ reviews" />
            <TrustBadge icon="🚚" text="Free Shipping" subtext="Orders $50+" />
            <TrustBadge icon="💳" text="Secure Payment" subtext="100% safe" />
            <TrustBadge icon="↩️" text="Easy Returns" subtext="30 days" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">
              ⭐ Featured Products
            </h2>
            <p className="text-gray-400 text-sm">Handpicked bestsellers just for you</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/products"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 text-sm"
            >
              View All Products →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/products"
            className="inline-block bg-slate-800 border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
          >
            🔍 Explore All {getAllProducts().length} Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 rounded-xl px-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700">
        <div className="text-center group transform hover:scale-105 transition-all">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1 text-white">Free Shipping</h3>
          <p className="text-gray-400 text-xs">Orders $50+</p>
        </div>
        <div className="text-center group transform hover:scale-105 transition-all">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all">
            <RotateCcw className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1 text-white">Easy Returns</h3>
          <p className="text-gray-400 text-xs">30-day policy</p>
        </div>
        <div className="text-center group transform hover:scale-105 transition-all">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1 text-white">Secure Payment</h3>
          <p className="text-gray-400 text-xs">100% safe</p>
        </div>
        <div className="text-center group transform hover:scale-105 transition-all">
          <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all shadow-md">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1 text-white">Quality Products</h3>
          <p className="text-gray-400 text-xs">Curated selection</p>
        </div>
      </section>
    </div>
  );
}

