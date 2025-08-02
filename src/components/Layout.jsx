// src/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import CategoryBar from './CategoryBar';

const Layout = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = () => setCartCount(c => c + 1);
  const toggleWishlist = () => setWishlistCount(w => w + 1);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Add CategoryBar here */}
      <CategoryBar />
      
      {isMobileMenuOpen && (
        <MobileNavbar closeMenu={() => setIsMobileMenuOpen(false)} />
      )}
      
      <main className="flex-grow">
        <Outlet context={{ 
          addToCart, 
          toggleWishlist,
          cartCount,
          wishlistCount
        }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;