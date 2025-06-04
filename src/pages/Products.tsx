
import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-crypto-gradient bg-clip-text text-transparent">
          Our Products
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "crypto-button" : "border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black"}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
