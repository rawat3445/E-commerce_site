// src/components/Pages/ElectronicsPage.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ProductGrid } from './ProductGrid';
import { featuredProducts } from '../../data/products';

const ElectronicsPage = () => {
  const { toggleWishlist } = useOutletContext();
  const electronicsProducts = featuredProducts.filter(
    p => p.category === 'Electronics'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Electronics</h1>
      <ProductGrid 
        products={electronicsProducts} 
        onWishlistToggle={toggleWishlist} 
      />
    </div>
  );
};

export default ElectronicsPage;