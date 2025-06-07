
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { items, getTotalPrice, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <Card className="absolute right-0 top-12 w-80 crypto-card p-4 z-50">
        <p className="text-gray-400 text-center">Your cart is empty</p>
        <p className="text-sm text-gray-500 text-center mt-2">Start shopping to add items!</p>
      </Card>
    );
  }

  return (
    <Card className="absolute right-0 top-12 w-80 crypto-card p-4 z-50">
      <div className="space-y-3">
        {items.slice(0, 3).map((item) => (
          <div key={item.product.id} className="flex items-center space-x-3">
            <img 
              src={item.product.image} 
              alt={item.product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.product.name}</h4>
              <p className="text-xs text-gray-400">
                ${item.product.price} x {item.quantity}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(item.product.id)}
              className="text-red-400 hover:text-red-300"
            >
              ×
            </Button>
          </div>
        ))}
        
        {items.length > 3 && (
          <p className="text-sm text-gray-400">+{items.length - 3} more items</p>
        )}
        
        <div className="border-t border-gray-700 pt-3">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">Total:</span>
            <span className="text-crypto-green font-bold">${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            <Link to="/cart" onClick={onClose}>
              <Button variant="outline" className="w-full border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-black">
                View Cart
              </Button>
            </Link>
            <Link to="/checkout" onClick={onClose}>
              <Button className="w-full crypto-button mt-4">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartDropdown;
