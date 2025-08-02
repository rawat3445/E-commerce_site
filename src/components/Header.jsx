// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Search, ShoppingCart, User, Heart, Bell, Menu, LogOut } from 'lucide-react'; // Added LogOut icon

const Header = ({ cartCount, wishlistCount, toggleMobileMenu }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get user and logout from context
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // For logout dropdown

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:flex items-center justify-between py-2 text-sm container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <span>Download App</span>
          <span>•</span>
          <span>Sell on Platform</span>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-4 h-4" />
          <span>24x7 Support</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 mr-2"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-grow md:flex-grow-0" 
            onClick={() => navigate('/')}
          >
            <h1 className="text-xl md:text-2xl font-bold text-yellow-400">ShopKart</h1>
            <span className="hidden md:inline text-xs ml-2 italic">Explore Plus</span>
          </div>

          {/* Search bar - hidden on mobile when not focused */}
          <div className={`${isSearchFocused ? 'absolute inset-x-0 top-16 bg-blue-600 p-4 z-10' : 'hidden'} md:block md:relative md:top-0 md:bg-transparent md:p-0 flex-1 max-w-2xl mx-2 md:mx-8`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full px-4 py-2 pl-10 text-gray-800 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile search button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsSearchFocused(!isSearchFocused)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User actions - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6">
            {/* User Profile Section */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center cursor-pointer hover:bg-blue-700 px-3 py-2 rounded">
                <User className="w-5 h-5 mr-2" />
                <span>{user ? `Hi, ${user.name}` : "Login"}</span>
              </div>
              
              {/* Dropdown for logged-in users */}
              {user && showDropdown && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white text-gray-800 rounded shadow-lg py-2 z-20">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.email}
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="flex items-center cursor-pointer hover:bg-blue-700 px-3 py-2 rounded relative">
              <Heart className="w-5 h-5 mr-2" />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-600 text-xs rounded-full px-2 py-1 font-semibold">
                  {wishlistCount}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="flex items-center cursor-pointer hover:bg-blue-700 px-3 py-2 rounded relative">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-600 text-xs rounded-full px-2 py-1 font-semibold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;