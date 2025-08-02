// src/components/CategoryBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Smartphone, Laptop, Home, Shirt, 
  Book, Gamepad2, Headphones, Camera 
} from 'lucide-react';

const categories = [
  { id: 1, name: 'Home', icon: Home, color: 'bg-green-500', path: '/' },
  { id: 2, name: 'Electronics', icon: Smartphone, color: 'bg-blue-500', path: '/electronics' },
  { id: 3, name: 'Fashion', icon: Shirt, color: 'bg-pink-500', path: '/fashion' },
  
  // Add other categories with paths
];

const CategoryBar = () => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm py-2">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap justify-center gap-4 pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = location.pathname === category.path;
            
            return (
              <Link
                key={category.id}
                to={category.path}
                className={`flex flex-col items-center min-w-[70px] md:min-w-[80px] px-2 cursor-pointer hover:bg-gray-50 py-2 rounded ${
                  isActive ? 'bg-gray-100 border-b-2 border-blue-500' : ''
                }`}
              >
                <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center mb-1`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-center font-medium text-gray-700 leading-tight">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;