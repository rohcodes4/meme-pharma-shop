
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCartStore();

  if (!product) {
    return (
      <div className="min-h-screen bg-crypto-dark">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-crypto-green mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="crypto-button">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link to="/products" className="text-crypto-green hover:underline">
            ← Back to Products
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-xl crypto-card p-4"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-crypto-green text-sm font-medium">{product.category}</span>
              <h1 className="text-4xl font-bold text-crypto-green mt-2">{product.name}</h1>
              <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="text-3xl font-bold text-crypto-green">
              ${product.price}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-crypto-green">Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <Card key={index} className="crypto-card">
                    <CardContent className="p-3">
                      <span className="text-sm text-gray-300">✓ {feature}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full crypto-button text-lg py-6"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${
                  product.inStock ? 'bg-green-400' : 'bg-red-400'
                }`} />
                <span className="text-gray-400">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <Card className="crypto-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-crypto-green mb-2">💎 Diamond Hands Guarantee</h4>
                <p className="text-gray-400 text-sm">
                  30-day money-back guarantee. If you don't feel the chad energy, we'll refund your crypto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
