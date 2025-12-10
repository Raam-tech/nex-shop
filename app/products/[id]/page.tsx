import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import Rating from "@/components/Rating";
import ProductLogo from "@/components/ProductLogo";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-square bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20"></div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {product.featured && (
            <span className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded">
              Featured Product
            </span>
          )}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <ProductLogo category={product.category} size="md" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">
                {product.name}
              </h1>
            </div>
          </div>
          {product.rating && (
            <div className="mb-3">
              <Rating rating={product.rating} reviews={product.reviews} size="md" />
            </div>
          )}
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {product.description}
          </p>
          <div className="space-y-2 mb-6">
            <div>
              <span className="text-sm font-medium text-gray-400">Category: </span>
              <span className="text-sm font-semibold text-white">
                {product.category}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400">Availability: </span>
              <span className={`text-sm font-semibold ${product.inStock ? "text-green-400" : "text-red-400"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
          <AddToCartButton product={product} variant="large" />
        </div>
      </div>
    </div>
  );
}
