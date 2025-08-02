// src/components/Pages/ProductDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { featuredProducts } from '../../data/products';
import { formatPrice } from './utils';
import { Star, ChevronLeft, ShoppingCart, Heart } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist } = useOutletContext();
  const product = featuredProducts.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-6"
      >
        <ChevronLeft className="mr-1" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full max-h-96 object-contain"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <span className="mr-1">{product.rating}</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold mr-3">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-red-600 font-medium ml-3">
                {product.discount}% off
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-600">
              {product.description || 'No description available'}
            </p>
          </div>
          
          <div className="flex items-center mb-8">
            <div className="mr-4">
              <label className="block mb-1">Quantity:</label>
              <div className="flex border rounded-md w-32">
                <button 
                  className="px-3 py-2 border-r"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="flex-1 text-center py-2">{quantity}</span>
                <button 
                  className="px-3 py-2 border-l"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md mr-3 flex items-center justify-center"
              onClick={() => addToCart(product.id)}
            >
              <ShoppingCart className="mr-2" />
              Add to Cart
            </button>
            
            <button 
              className="p-3 border rounded-md hover:bg-gray-50"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;