
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <Card className="crypto-card max-w-2xl mx-auto text-center">
          <CardContent className="p-12">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-4xl font-bold text-crypto-green mb-4">
              Order Successful!
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Your order has been placed successfully! Get ready for some serious chad energy.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-6 mb-8">
              <h3 className="text-crypto-green font-semibold mb-2">What's Next?</h3>
              <ul className="text-gray-400 space-y-2 text-left">
                <li>✓ Order confirmation sent to your email</li>
                <li>✓ Processing within 24 hours</li>
                <li>✓ Free shipping to your address</li>
                <li>✓ Diamond hands guarantee included</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link to="/products">
                <Button className="crypto-button w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;
