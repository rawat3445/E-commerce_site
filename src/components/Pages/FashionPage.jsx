// src/components/Pages/FashionPage.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ProductGrid } from './ProductGrid';
import { featuredProducts } from '../../data/products';

const FashionPage = () => {
  const { toggleWishlist } = useOutletContext();
  const fashionProducts = featuredProducts.filter(
    p => p.category === 'Fashion'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Fashion</h1>
      {fashionProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">👗</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Fashion Items Found</h2>
          <p className="text-gray-600">Check back soon for our latest fashion collection</p>
        </div>
      ) : (
        <ProductGrid 
          products={fashionProducts} 
          onWishlistToggle={toggleWishlist} 
        />
      )}
    </div>
  );
};

export default FashionPage;