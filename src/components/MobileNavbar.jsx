// src/components/MobileNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Shirt, Smartphone, Laptop, 
  Book, Gamepad2, Headphones, Camera, 
  User, Heart, ShoppingCart, X 
} from 'lucide-react';

const MobileNavbar = ({ closeMenu }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <button onClick={closeMenu} className="p-2">
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      
      <div className="mb-8">
        <h3 className="text-gray-500 text-sm uppercase mb-3">Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Home className="w-6 h-6 text-blue-500 mb-1" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/fashion" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Shirt className="w-6 h-6 text-pink-500 mb-1" />
            <span className="text-sm">Fashion</span>
          </Link>
          <Link to="/electronics" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Smartphone className="w-6 h-6 text-blue-500 mb-1" />
            <span className="text-sm">Electronics</span>
          </Link>
          <Link to="/" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Laptop className="w-6 h-6 text-gray-500 mb-1" />
            <span className="text-sm">Laptops</span>
          </Link>
          <Link to="/" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Book className="w-6 h-6 text-yellow-500 mb-1" />
            <span className="text-sm">Books</span>
          </Link>
          <Link to="/" className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <Gamepad2 className="w-6 h-6 text-purple-500 mb-1" />
            <span className="text-sm">Gaming</span>
          </Link>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-gray-500 text-sm uppercase mb-3">Account</h3>
        <div className="space-y-2">
          <Link to="/ModernAuthPage" className="flex items-center p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-gray-600 mr-3" />
            <span>Login / Signup</span>
          </Link>
          <Link to="/" className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Heart className="w-5 h-5 text-gray-600 mr-3" />
            <span>Wishlist</span>
          </Link>
          <Link to="/" className="flex items-center p-3 bg-gray-50 rounded-lg">
            <ShoppingCart className="w-5 h-5 text-gray-600 mr-3" />
            <span>Cart</span>
          </Link>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-500 text-sm uppercase mb-3">Support</h3>
        <div className="space-y-2">
          <Link to="/" className="block p-3 bg-gray-50 rounded-lg">24x7 Support</Link>
          <Link to="/" className="block p-3 bg-gray-50 rounded-lg">Download App</Link>
          <Link to="/" className="block p-3 bg-gray-50 rounded-lg">Sell on Platform</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;