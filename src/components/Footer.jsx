// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Payments</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">POLICY</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Security</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SOCIAL</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;