import React from 'react';
import { Star } from 'lucide-react';

export const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card-parent" onClick={() => onClick(product)}>
      <div className="product-card">
        <div className={`content-box ${product.sport}`}>
          <span className="card-title">{product.name}</span>
          <p className="card-content">
            {product.description.slice(0, 100)}...
          </p>
          <div className="flex items-center gap-2 mt-4 transform translate-z-20">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-bold">{product.rating}</span>
            <span className="text-white ml-auto font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="date-box">
          <img 
            src={product.image} 
            alt={product.name}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};