// src/data/products.js
export const featuredProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 134900,
    originalPrice: 159900,
    discount: 16,
    rating: 4.5,
    reviews: 1250,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop',
    category: 'Electronics'
  },
  {
      id: 2,
      name: 'Nike Air Max',
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      rating: 4.3,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      price: 114900,
      originalPrice: 124900,
      discount: 8,
      rating: 4.7,
      reviews: 2100,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Samsung 55" QLED TV',
      price: 54999,
      originalPrice: 79999,
      discount: 31,
      rating: 4.4,
      reviews: 670,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Adidas Hoodie',
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.2,
      reviews: 450,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
      category: 'Fashion'
    },
    {
      id: 6,
      name: 'Coffee Maker',
      price: 12999,
      originalPrice: 18999,
      discount: 32,
      rating: 4.1,
      reviews: 320,
      image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=300&h=300&fit=crop',
      category: 'Home'
    }
  // ... (paste all your products here)
];

export const categories = [
  { id: 1, name: 'Electronics', icon: 'Smartphone', color: 'bg-blue-500' },
  // ... (paste all your categories here)
];