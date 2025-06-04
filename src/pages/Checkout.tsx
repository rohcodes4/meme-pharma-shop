
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AuthModal from '../components/AuthModal';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleBuy = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    // Mock checkout process
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-crypto-dark">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-crypto-green mb-4">No Items to Checkout</h1>
          <p className="text-gray-400 mb-8">Add some products to your cart first!</p>
          <Button onClick={() => navigate('/products')} className="crypto-button">
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-crypto-green">
          Checkout
        </h1>

        <div className="max-w-2xl mx-auto">
          {!isAuthenticated && (
            <Card className="crypto-card border-yellow-500/50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-crypto-green font-semibold">Login Required</h3>
                    <p className="text-gray-400 text-sm">Please login to complete your order</p>
                  </div>
                  <Button onClick={() => setShowAuthModal(true)} className="crypto-button">
                    Login
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="crypto-card">
            <CardHeader>
              <CardTitle className="text-crypto-green">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{item.product.name}</h4>
                        <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-crypto-green">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-crypto-green">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleBuy} 
                  className="w-full crypto-button text-xl py-6 mt-6"
                  disabled={!isAuthenticated}
                >
                  {isAuthenticated ? 'Buy Now' : 'Login to Buy'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default Checkout;
