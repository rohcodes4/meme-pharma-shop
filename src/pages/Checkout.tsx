
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AuthModal from '../components/AuthModal';

const Checkout = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleBuy = () => {
    // if (!isAuthenticated) {
    //   setShowAuthModal(true);
    //   return;
    // }

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
        <div className="container mx-auto px-6 py-24 text-center max-w-4xl">
          <div className="text-8xl mb-8">🛒</div>
          <h1 className="text-5xl font-bold text-crypto-green mb-8">Cart Empty, Anon!</h1>
          <p className="text-gray-300 text-xl mb-12 leading-relaxed">
            Your cart is emptier than a bear market. Time to load up on some alpha supplements! 
            <span className="text-purple-300">Don't stay poor, fren.</span>
          </p>
          <Button onClick={() => navigate('/products')} className="crypto-button text-xl px-12 py-6">
            Start Aping 🦍💊
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-crypto-gradient bg-clip-text text-transparent">
            Checkout - Final Ape 🦍
          </h1>
          <p className="text-gray-300 text-xl">
            You're about to ascend to chad status. Let's fucking go! 🚀
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* {!isAuthenticated && (
            <Card className="crypto-card border-yellow-500/50 glow-yellow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">⚠️</div>
                    <div>
                      <h3 className="text-crypto-green font-bold text-xl">Login Required, Anon</h3>
                      <p className="text-gray-300 text-lg">Connect your wallet... I mean, login to complete your order</p>
                    </div>
                  </div>
                  <Button onClick={() => setShowAuthModal(true)} className="crypto-button text-lg px-8 py-4">
                    Login & Ape 🔑
                  </Button>
                </div>
              </CardContent>
            </Card>
          )} */}

          <Card className="crypto-card glow-green">
            <CardHeader className="pb-6">
              <CardTitle className="text-crypto-green text-2xl flex items-center">
                <span className="mr-3">💊</span>
                Your Alpha Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-20 h-20 rounded-xl object-cover border-2 border-crypto-green/30"
                    />
                    <div>
                      <h4 className="font-bold text-xl text-crypto-green">{item.product.name}</h4>
                      <p className="text-gray-300 text-lg">Quantity: <span className="text-crypto-green font-bold">{item.quantity}</span></p>
                    <span className="font-bold text-2xl text-crypto-green">{(item.product.price * item.quantity).toFixed(2)} $PHMCY</span>

                      {/* <p className="text-purple-300 text-sm">{item.product.category} • Chad Tier</p> */}
                    </div>
                  </div>
                  {/* <div className="text-right">
                    <span className="font-bold text-2xl text-crypto-green">{(item.product.price * item.quantity).toFixed(2)} $PHMCY</span>
                  </div> */}
                </div>
              ))}
              
              <div className="border-t border-gray-600 pt-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-white font-medium">{getTotalPrice().toFixed(2)} $PHMCY</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-300">Shipping</span>
                  <span className="text-crypto-green font-bold">FREE (Chad Privilege)</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-300">Degen Tax</span>
                  <span className="text-purple-300 font-bold">0.00 $PHMCY (WAGMI)</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-crypto-green">{getTotalPrice().toFixed(2)} $PHMCY</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={handleBuy} 
                  className="w-full crypto-button text-2xl py-8 font-bold"
                  // disabled={!isAuthenticated}
                >
                  {/* {isAuthenticated ? '🚀 Send It! (Buy Now)' : '🔒 Login to Send It'} */}
                  🚀 Send It! (Buy Now)
                </Button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                    💎 Diamond hands activated. No refunds needed when you're this based.
                  </p>
                {/* {isAuthenticated && (
                  <p className="text-center text-gray-400 text-sm mt-4">
                    💎 Diamond hands activated. No refunds needed when you're this based.
                  </p>
                )} */}
              </div>
            </CardContent>
          </Card>

          <Card className="crypto-card border-purple-500/30 glow-purple">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💎🙌</div>
              <h4 className="font-bold text-crypto-green text-xl mb-4">Chad Guarantee</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                30-day diamond hands guarantee. If you don't feel the alpha energy coursing through your veins, 
                we'll refund your entire stack. But let's be real, you're going to love this shit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default Checkout;
