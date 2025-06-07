
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-crypto-dark">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-crypto-green mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">Time to get some chad energy!</p>
          <Link to="/products">
            <Button className="crypto-button">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-crypto-green">Shopping Cart</h1>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.product.id} className="crypto-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-crypto-green">
                        {item.product.name}
                      </h3>
                      {/* <p className="text-gray-400 text-sm mt-1">
                        {item.product.category}
                      </p> */}
                      <p className="text-xs font-bold mt-2">
                      {item.product.price} $PHMCY
                      </p>
                    </div>

                    

                    <div className="text-right flex flex-col justify-center !mx-0">
                      <p className="text-lg font-bold text-crypto-green">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-3 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black"
                      >
                        -
                      </Button>
                      <span className="w-1 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black"
                      >
                        +
                      </Button>
                    </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-400 hover:text-red-300 mt-2"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="crypto-card sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-crypto-green mb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-crypto-green">FREE</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-crypto-green">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full crypto-button text-lg py-3">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Link to="/products">
                  <Button variant="outline" className="w-full mt-3 border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
