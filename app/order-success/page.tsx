import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-white mb-3">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-300 mb-6">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          href="/products"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
        >
          Continue Shopping
        </Link>
        <Link
          href="/"
          className="inline-block bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
