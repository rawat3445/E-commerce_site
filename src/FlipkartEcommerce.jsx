// src/FlipkartEcommerce.js
import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from "react-router-dom";
import {
  ChevronLeft, ChevronRight, Gift, Star,
  Smartphone, Laptop, Home, Shirt,
  Book, Gamepad2, Headphones, Camera, Heart
} from 'lucide-react';

const FlipkartEcommerce = () => {
  const { addToCart, toggleWishlist, cartCount, wishlistCount } = useOutletContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Banner slides
  const bannerSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop',
      title: 'Big Billion Days',
      subtitle: 'Up to 80% OFF on Electronics'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
      title: 'Fashion Sale',
      subtitle: 'Min 50% OFF on Top Brands'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop',
      title: 'Home & Furniture',
      subtitle: 'Transform Your Space'
    }
  ];

  // Categories
  const categories = [
    { id: 1, name: 'Electronics', icon: Smartphone, color: 'bg-blue-500' },
    { id: 2, name: 'Fashion', icon: Shirt, color: 'bg-pink-500' },
    { id: 3, name: 'Home', icon: Home, color: 'bg-green-500' },

  ];

  // Featured products
  const featuredProducts = [
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
  ];

  // Auto-slide banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Carousel */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="text-white max-w-md">
                    <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{slide.title}</h2>
                    <p className="text-base md:text-xl mb-2 md:mb-4">{slide.subtitle}</p>
                    <button className="bg-yellow-400 text-blue-900 px-4 py-1 md:px-6 md:py-2 rounded font-semibold hover:bg-yellow-300 transition-colors text-sm md:text-base">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? bannerSlides.length - 1 : currentSlide - 1)}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-1 md:p-2 text-white"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % bannerSlides.length)}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-1 md:p-2 text-white"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Deals of the Day */}
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center mb-2 md:mb-0">
              <Gift className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Deals of the Day</h2>
              <span className="ml-2 md:ml-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                22:45:30 Left
              </span>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800 text-sm md:text-base">View All</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 md:h-48 object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-1 md:top-2 right-1 md:right-2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-red-50"
                  >
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-red-500" />
                  </button>
                  <div className="absolute top-1 md:top-2 left-1 md:left-2 bg-green-500 text-white px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[10px] md:text-xs font-semibold">
                    {product.discount}% OFF
                  </div>
                </div>

                <div className="p-2 md:p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 truncate text-sm md:text-base">{product.name}</h3>
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="flex items-center bg-green-500 text-white px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[10px] md:text-xs">
                      <span>{product.rating}</span>
                      <Star className="w-2.5 h-2.5 md:w-3 md:h-3 ml-1 fill-current" />
                    </div>
                    <span className="text-gray-500 text-[10px] md:text-xs ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center mb-2 md:mb-3">
                    <span className="text-base md:text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                    <span className="text-gray-500 text-xs md:text-sm line-through ml-1 md:ml-2">{formatPrice(product.originalPrice)}</span>
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-1.5 md:py-2 px-2 md:px-4 rounded transition-colors text-xs md:text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {categories.slice(0, 4).map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/${category.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              >
                <div className={`h-24 md:h-32 ${category.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">{category.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">Up to 80% OFF</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlipkartEcommerce;