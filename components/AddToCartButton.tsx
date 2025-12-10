"use client";

import { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  variant?: "default" | "large";
}

export default function AddToCartButton({
  product,
  variant = "default",
}: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (variant === "large") {
    return (
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
          added
            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
            : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg"
        }`}
      >
        <ShoppingCart className="w-5 h-5" />
        {added ? "✓ Added to Cart!" : "Add to Cart"}
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full py-2 px-3 rounded-lg font-bold transition-all transform hover:scale-105 text-xs shadow-md hover:shadow-lg ${
        added
          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
          : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600"
      }`}
    >
      {added ? "✓ Added!" : "🛒 Add to Cart"}
    </button>
  );
}

