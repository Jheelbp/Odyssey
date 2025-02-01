import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black mt-auto">
      {/* blue gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-900" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-blue-500 font-bold text-lg">Company Name</h3>
            <p className="text-gray-300">
              Creating innovative solutions for tomorrow's challenges. Leading the way in technology and design.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-blue-500 font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/News" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                  News
                </a>
              </li>
              <li>
                <a href="/Store" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="/Profile" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-blue-500 font-bold text-lg">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300">123 Business Street</p>
              <p className="text-gray-300">City, State 12345</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
              <p className="text-gray-300">Email: info@company.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2025 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;