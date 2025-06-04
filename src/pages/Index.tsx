
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { Button } from '../components/ui/button';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-crypto-gradient bg-clip-text text-transparent animate-float">
            PHARMEMESY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate crypto trader's pharmacy. Premium supplements for diamond hands and moon missions.
          </p>
          <div className="space-x-4">
            <Link to="/products">
              <Button className="crypto-button text-lg px-8 py-4">
                Shop Now
              </Button>
            </Link>
            <Button variant="outline" className="text-lg px-8 py-4 border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-crypto-green">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="crypto-button">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="crypto-card p-8">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-crypto-green mb-4">Diamond Hands Formula</h3>
              <p className="text-gray-400">Specially crafted for hodlers who never sell</p>
            </div>
            <div className="crypto-card p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-crypto-green mb-4">Moon Mission Ready</h3>
              <p className="text-gray-400">Boost your trading performance to the moon</p>
            </div>
            <div className="crypto-card p-8">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-crypto-green mb-4">Chad Energy</h3>
              <p className="text-gray-400">Feel the power of a true crypto chad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 PHARMEMESY. All rights reserved. WAGMI 🚀</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
