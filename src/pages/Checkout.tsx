
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AuthModal from '../components/AuthModal';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {!isAuthenticated && (
              <Card className="crypto-card border-yellow-500/50">
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
                <CardTitle className="text-crypto-green">Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="crypto-input"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                  </div>
                  <Input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="crypto-input"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                    <Input
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                  </div>
                  <Input
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="crypto-input"
                    required
                  />
                </form>
              </CardContent>
            </Card>

            <Card className="crypto-card">
              <CardHeader>
                <CardTitle className="text-crypto-green">Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    name="nameOnCard"
                    placeholder="Name on Card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="crypto-input"
                    required
                  />
                  <Input
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="crypto-input"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                    <Input
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="crypto-input"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="crypto-card sticky top-24">
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
                          className="w-12 h-12 rounded-lg object-cover"
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
                    onClick={handleSubmit} 
                    className="w-full crypto-button text-lg py-3 mt-6"
                    disabled={!isAuthenticated}
                  >
                    {isAuthenticated ? 'Complete Order' : 'Login to Complete Order'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default Checkout;
