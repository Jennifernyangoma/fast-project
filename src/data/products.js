export const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.5,
    reviewCount: 1247,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "The Nike Air Max 270 delivers unrivaled, all-day comfort. The shoe's design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Red", "Blue"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    category: "Shoes",
    price: 179.99,
    rating: 4.7,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    description: "The Ultraboost 21 features a responsive Boost midsole and a Primeknit+ upper that adapts to your foot for a sock-like fit.",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Grey"],
    inStock: true,
    isWishlisted: true
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    category: "Clothes",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.3,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Premium cotton t-shirt with a comfortable fit and modern design. Perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Grey"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Clothes",
    price: 89.99,
    rating: 4.6,
    reviewCount: 423,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
    description: "Classic denim jacket with a modern fit. Features comfortable stretch denim and multiple pockets.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 999.99,
    rating: 4.8,
    reviewCount: 2156,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    description: "The most advanced iPhone ever. Features A17 Pro chip, titanium design, and pro camera system.",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    ],
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    inStock: true,
    isWishlisted: true
  },
  {
    id: 6,
    name: "MacBook Air M2",
    category: "Electronics",
    price: 1199.99,
    originalPrice: 1299.99,
    discount: 8,
    rating: 4.9,
    reviewCount: 1893,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "The most powerful MacBook Air ever. With the M2 chip, it's faster and more efficient than ever.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
    ],
    sizes: ["256GB", "512GB", "1TB"],
    colors: ["Space Gray", "Silver", "Starlight", "Midnight"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 7,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    rating: 4.4,
    reviewCount: 756,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Blue"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "Electronics",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.5,
    reviewCount: 634,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring, GPS, and long battery life.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop"
    ],
    sizes: ["38mm", "42mm", "44mm"],
    colors: ["Black", "Silver", "Gold"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 9,
    name: "Running Shorts",
    category: "Clothes",
    price: 34.99,
    rating: 4.2,
    reviewCount: 289,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    description: "Lightweight running shorts with built-in liner and multiple pockets.",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 10,
    name: "Hooded Sweatshirt",
    category: "Clothes",
    price: 59.99,
    rating: 4.6,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description: "Comfortable hooded sweatshirt made from premium cotton blend.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black", "Navy", "White"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 11,
    name: "Converse Chuck Taylor",
    category: "Shoes",
    price: 69.99,
    rating: 4.4,
    reviewCount: 1123,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
    description: "Classic canvas sneakers with timeless design and comfortable fit.",
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Red", "Navy"],
    inStock: true,
    isWishlisted: false
  },
  {
    id: 12,
    name: "Gaming Laptop",
    category: "Electronics",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    rating: 4.7,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    description: "High-performance gaming laptop with RTX graphics and fast refresh rate display.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
    ],
    sizes: ["512GB", "1TB", "2TB"],
    colors: ["Black", "Grey"],
    inStock: true,
    isWishlisted: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'clothes', name: 'Clothes', icon: '👕' },
  { id: 'electronics', name: 'Electronics', icon: '📱' }
];

export const featuredProducts = products.slice(0, 6);
