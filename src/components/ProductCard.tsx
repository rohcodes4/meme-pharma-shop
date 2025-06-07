
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Card className="crypto-card group hover:scale-105 transition-all duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
      
      <CardHeader className="pb-2">
      
        <CardTitle className="text-xl text-crypto-green flex justify-between items-center">
        <Link to={`/product/${product.id}`}>
        {product.name} &trade;
        </Link>
        <span className={`text-xs px-2 py-1 rounded-full ${
            product.inStock 
              ? 'bg-green-900/30 text-green-400' 
              : 'bg-red-900/30 text-red-400'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-crypto-green">
            {product.price} $PHMCY
          </span>
          <Button 
            onClick={handleAddToCart}
            className="crypto-button"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
        
        {/* <div className="mt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.inStock 
              ? 'bg-green-900/30 text-green-400' 
              : 'bg-red-900/30 text-red-400'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
