export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&q=80",
    category: "Electronics",
    featured: true,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description:
      "Advanced smartwatch with health tracking, GPS, and water resistance. Stay connected and monitor your fitness goals.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    featured: true,
    rating: 4.9,
    reviews: 2156,
    inStock: true,
  },
  {
    id: "3",
    name: "Leather Backpack",
    description:
      "Stylish and durable leather backpack with multiple compartments. Perfect for work, travel, or everyday use.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop&q=80",
    category: "Fashion",
    featured: true,
    rating: 4.7,
    reviews: 892,
    inStock: true,
  },
  {
    id: "4",
    name: "Running Shoes",
    description:
      "Comfortable and lightweight running shoes with advanced cushioning technology. Ideal for athletes and runners.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&q=80",
    category: "Fashion",
    featured: true,
    rating: 4.6,
    reviews: 1534,
    inStock: true,
  },
  {
    id: "5",
    name: "Laptop Stand",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop&q=80",
    category: "Electronics",
    rating: 4.5,
    reviews: 623,
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Coffee Maker",
    description:
      "Programmable coffee maker with thermal carafe. Brew perfect coffee every morning with customizable settings.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517668808824-b7a0b1b5e0b5?w=800&h=800&fit=crop&q=80",
    category: "Home",
    rating: 4.4,
    reviews: 445,
    inStock: true,
  },
  {
    id: "7",
    name: "Yoga Mat",
    description:
      "Premium non-slip yoga mat with extra cushioning. Perfect for yoga, pilates, and fitness workouts.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83d12163?w=800&h=800&fit=crop&q=80",
    category: "Sports",
    rating: 4.6,
    reviews: 756,
    inStock: true,
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop&q=80",
    category: "Electronics",
    rating: 4.7,
    reviews: 1034,
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    name: "Sunglasses",
    description:
      "Stylish UV-protection sunglasses with polarized lenses. Protect your eyes while looking fashionable.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop&q=80",
    category: "Fashion",
    rating: 4.5,
    reviews: 567,
    inStock: true,
    featured: true,
  },
  {
    id: "10",
    name: "Desk Lamp",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for work and study.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop&q=80",
    category: "Home",
    rating: 4.3,
    reviews: 389,
    inStock: true,
  },
  {
    id: "11",
    name: "Water Bottle",
    description:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
    category: "Sports",
    rating: 4.8,
    reviews: 1245,
    inStock: true,
    featured: true,
  },
  {
    id: "12",
    name: "Phone Case",
    description:
      "Protective phone case with shock absorption and wireless charging compatibility. Available in multiple colors.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop&q=80",
    category: "Electronics",
    rating: 4.4,
    reviews: 2341,
    inStock: true,
  },
  {
    id: "13",
    name: "Gaming Keyboard",
    description:
      "Mechanical gaming keyboard with RGB backlighting and customizable keys. Perfect for gamers and professionals.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    rating: 4.7,
    reviews: 987,
    inStock: true,
    featured: true,
  },
  {
    id: "14",
    name: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    rating: 4.6,
    reviews: 1123,
    inStock: true,
    featured: true,
  },
  {
    id: "15",
    name: "Fitness Tracker",
    description:
      "Advanced fitness tracker with heart rate monitoring, sleep tracking, and activity recognition.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&h=800&fit=crop&q=90",
    category: "Sports",
    rating: 4.5,
    reviews: 678,
    inStock: true,
  },
  {
    id: "16",
    name: "Tablet Stand",
    description:
      "Adjustable tablet stand with multiple viewing angles. Compatible with all tablet sizes.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=800&fit=crop&q=80",
    category: "Electronics",
    rating: 4.4,
    reviews: 456,
    inStock: true,
  },
  {
    id: "17",
    name: "Wireless Earbuds Pro",
    description:
      "Premium true wireless earbuds with active noise cancellation, 8-hour battery, and crystal-clear sound quality.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    rating: 4.8,
    reviews: 2341,
    inStock: true,
    featured: true,
  },
  {
    id: "18",
    name: "Designer Watch",
    description:
      "Luxury timepiece with premium materials, water resistance, and elegant design. Perfect for any occasion.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop&q=90",
    category: "Fashion",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    featured: true,
  },
  {
    id: "19",
    name: "Air Purifier",
    description:
      "HEPA air purifier with 3-stage filtration system. Removes 99.97% of airborne particles and allergens.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1600080979464-d66b3a5b8c92?w=800&h=800&fit=crop&q=90",
    category: "Home",
    rating: 4.6,
    reviews: 892,
    inStock: true,
  },
  {
    id: "20",
    name: "Dumbbell Set",
    description:
      "Adjustable dumbbell set with quick-change weight system. Perfect for home gym workouts and strength training.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&q=80",
    category: "Sports",
    rating: 4.7,
    reviews: 1234,
    inStock: true,
  },
  {
    id: "21",
    name: "4K Monitor",
    description:
      "27-inch 4K UHD monitor with HDR support, 144Hz refresh rate, and ultra-thin bezels. Perfect for gaming and work.",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    rating: 4.8,
    reviews: 1876,
    inStock: true,
  },
  {
    id: "22",
    name: "Leather Jacket",
    description:
      "Genuine leather jacket with premium craftsmanship, classic design, and comfortable fit. Timeless style.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop&q=90",
    category: "Fashion",
    rating: 4.7,
    reviews: 445,
    inStock: true,
  },
  {
    id: "23",
    name: "Smart Thermostat",
    description:
      "Wi-Fi enabled smart thermostat with voice control, learning capabilities, and energy-saving features.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=90",
    category: "Home",
    rating: 4.5,
    reviews: 678,
    inStock: true,
  },
  {
    id: "24",
    name: "Basketball",
    description:
      "Professional-grade basketball with premium composite leather and superior grip. Official size and weight.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=800&fit=crop&q=80",
    category: "Sports",
    rating: 4.6,
    reviews: 987,
    inStock: true,
  },
  {
    id: "25",
    name: "USB-C Hub",
    description:
      "Multi-port USB-C hub with 8-in-1 functionality including HDMI, USB 3.0, SD card reader, and power delivery.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=800&fit=crop&q=90",
    category: "Electronics",
    rating: 4.4,
    reviews: 1123,
    inStock: true,
  },
  {
    id: "26",
    name: "Canvas Sneakers",
    description:
      "Classic canvas sneakers with comfortable cushioning, durable construction, and versatile style.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&q=80",
    category: "Fashion",
    rating: 4.5,
    reviews: 2345,
    inStock: true,
  },
  {
    id: "27",
    name: "Robot Vacuum",
    description:
      "Smart robot vacuum with mapping technology, app control, and self-emptying base. Cleans your home automatically.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&q=90",
    category: "Home",
    rating: 4.7,
    reviews: 1456,
    inStock: true,
  },
  {
    id: "28",
    name: "Resistance Bands",
    description:
      "Professional resistance band set with 5 different resistance levels. Perfect for strength training and rehabilitation.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&q=80",
    category: "Sports",
    rating: 4.6,
    reviews: 1789,
    inStock: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)));
}
