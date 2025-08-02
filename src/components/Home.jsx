// src/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { ChevronLeft, ChevronRight, Gift, Star } from 'lucide-react';
import { featuredProducts } from "../data/products"; // Now points to the file we created
import { formatPrice } from './Pages/utils'; // Now points to the file we created

const HomePage = () => {
  const { addToCart, toggleWishlist } = useOutletContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Banner slides
  const bannerSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop',
      title: 'Big Billion Days',
      subtitle: 'Up to 80% OFF on Electronics'
    },
    // ... other slides
  ];

  // Auto-slide banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ... rest of your home page content ... */}
    </div>
  );
};

export default HomePage;