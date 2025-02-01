import React, { useState } from 'react';
import { Activity, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-sm  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">SportsPro</span>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-4">
              <a href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/News" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">News</a>
              <a href="/store" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Store</a>
              <a href="/tutorials" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Tutorials</a>
              <a href="/Book" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Book</a>
              <a href="/message" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Messages</a>
            </div>
          </div>
          
          {/* Profile Dropdown */}
          <div className="hidden md:flex items-center ml-4 relative group">
            <button className="flex items-center space-x-2 focus:outline-none">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-white/50 hover:border-white transition duration-300"
              />
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
              <a href="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 p-4 space-y-2">
          <a href="/" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/News" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">News</a>
          <a href="/tutorials" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Tutorials</a>
          <a href="/store" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Store</a>
          <a href="/Book" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Ground</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;