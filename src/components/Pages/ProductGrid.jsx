// src/components/ProductGrid.jsx
import React from 'react';
import { formatPrice } from './utils';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductGrid = ({ products, onWishlistToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group"
        >
          {/* Wishlist button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if(onWishlistToggle) onWishlistToggle(product.id);
            }}
            className="absolute top-2 right-2 bg-white rounded-full p-2 z-10 hover:bg-red-50 transition-colors"
          >
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
          </button>
          
          {/* Product content */}
          <Link 
            to={`/product/${product.id}`}
            className="block"
          >
            <div className="relative h-60 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain p-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentNode.innerHTML = '<div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">Image not available</div>';
                }}
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  <span>{product.rating}</span>
                  <Star className="w-3 h-3 ml-1 fill-current" />
                </div>
                <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                <span className="text-gray-500 text-sm line-through ml-2">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};