import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1719501574608-0cf632f7c0f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sports Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          PUSH YOUR LIMITS
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Where champions are made and legends begin
        </p>
        <Link to="/Book">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
