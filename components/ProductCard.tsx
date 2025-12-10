import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import Rating from "./Rating";
import ProductLogo from "./ProductLogo";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            quality={90}
            priority={product.featured}
            loading={product.featured ? "eager" : "lazy"}
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
              ⭐ HOT
            </span>
          )}
          {product.inStock === false && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
              Sold Out
            </span>
          )}
          {product.inStock && (
            <span className="absolute bottom-2 left-2 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
              ✓ In Stock
            </span>
          )}
        </div>
      </Link>
      <div className="p-3 bg-slate-800">
        <div className="flex items-start justify-between mb-1.5">
          <Link href={`/products/${product.id}`} className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>
          <ProductLogo category={product.category} size="sm" />
        </div>
        {product.rating && (
          <div className="mb-1.5">
            <Rating rating={product.rating} reviews={product.reviews} size="sm" />
          </div>
        )}
        <div className="flex items-center justify-between mb-2">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-extrabold text-lg">
            ${product.price.toFixed(2)}
          </p>
          {product.price > 100 && (
            <span className="text-[10px] text-green-400 font-semibold bg-green-500/20 px-1.5 py-0.5 rounded">
              FREE SHIP
            </span>
          )}
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

