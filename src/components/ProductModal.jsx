import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';

export const ProductModal = ({ product, onClose, onOrder }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Product Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            
            {/* Image Section */}
            <div className="relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[250px] object-cover rounded-lg shadow-md transform transition-transform group-hover:scale-105"
              />
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-white text-xs font-semibold shadow-md ${
                product.sport === 'cricket' ? 'bg-blue-500' :
                product.sport === 'football' ? 'bg-green-500' :
                product.sport === 'basketball' ? 'bg-orange-500' : 'bg-gray-500'
              }`}>
                {product.sport}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-700">{product.rating}</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="text-2xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-gray-900">Customer Reviews</h4>
            <div className="grid gap-3">
              {product.comments.length > 0 ? (
                product.comments.map((comment, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-3 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{comment.user}</span>
                      <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-full shadow-sm">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium">{comment.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 py-10 bg-gray-100 flex items-center justify-between rounded-b-2xl">
          <span className="text-gray-600 text-sm font-medium">Ready to place an order?</span>
          <button 
            onClick={onOrder}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg flex items-center gap-2 shadow-md transform transition-transform hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
