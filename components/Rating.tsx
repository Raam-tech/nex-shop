import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md" | "lg";
}

export default function Rating({ rating, reviews, size = "md" }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = size === "sm" ? "w-3 h-3" : size === "lg" ? "w-6 h-6" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSize} fill-yellow-400 text-yellow-400`} />
        ))}
        {hasHalfStar && (
          <div className="relative inline-block">
            <Star className={`${starSize} text-gray-300`} />
            <div className="absolute left-0 top-0 overflow-hidden" style={{ width: "50%" }}>
              <Star className={`${starSize} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSize} text-gray-300`} />
        ))}
      </div>
      <span className={`text-gray-300 ${size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"}`}>
        {rating.toFixed(1)}
      </span>
      {reviews !== undefined && (
        <span className={`text-gray-400 ${size === "sm" ? "text-xs" : size === "lg" ? "text-sm" : "text-xs"}`}>
          ({reviews})
        </span>
      )}
    </div>
  );
}

