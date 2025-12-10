interface ProductLogoProps {
  category: string;
  size?: "sm" | "md" | "lg";
}

export default function ProductLogo({ category, size = "md" }: ProductLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-base",
  };

  const categoryIcons: Record<string, string> = {
    Electronics: "⚡",
    Fashion: "👔",
    Home: "🏠",
    Sports: "⚽",
  };

  const categoryColors: Record<string, string> = {
    Electronics: "bg-blue-100 text-blue-600 border-blue-300",
    Fashion: "bg-pink-100 text-pink-600 border-pink-300",
    Home: "bg-green-100 text-green-600 border-green-300",
    Sports: "bg-orange-100 text-orange-600 border-orange-300",
  };

  const icon = categoryIcons[category] || "📦";
  const colorClass = categoryColors[category] || "bg-gray-100 text-gray-600 border-gray-300";

  return (
    <div
      className={`${sizeClasses[size]} ${colorClass} rounded-full border-2 flex items-center justify-center font-bold shadow-sm`}
      title={category}
    >
      {icon}
    </div>
  );
}

