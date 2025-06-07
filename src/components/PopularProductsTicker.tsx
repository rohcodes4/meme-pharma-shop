
import React from 'react';
import { products } from '../data/products';
import { formatNumber } from '@/lib/utils';

const PopularProductsTicker = () => {
  // Create a longer array for seamless scrolling
  const tickerProducts = [...products, ...products, ...products];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-crypto-green/20 via-purple-500/20 to-pink-500/20 py-4 border-y border-crypto-green/30">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative">
        <div className="flex items-center space-x-8 animate-scroll">
          {tickerProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
              <span className="text-crypto-green font-bold text-lg">🔥</span>
              <span className="text-white font-semibold">{product.name}</span>
              <span className="text-crypto-green font-bold">{formatNumber(product.price)} $PHMCY</span>
              <span className="text-purple-300">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsTicker;
