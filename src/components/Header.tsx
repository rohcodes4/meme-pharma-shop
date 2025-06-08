
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import { User, Search } from 'lucide-react';
import { Button } from './ui/button';
import AuthModal from './AuthModal';
import CartDropdown from './CartDropdown';
import logo from '../assets/pharmemecy-logo.png';
// import x from '../assets/x.png';
import x from '../assets/x.jpg';
import copy from '../assets/copy.png';
import check from '../assets/check.png';
import { copyToClipboard } from '@/lib/utils';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { getTotalItems } = useCartStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [isCopied, setIsCopied] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-crypto-darker/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-crypto-gradient bg-clip-text text-transparent hover:scale-105 transition-transform flex justify-center items-center gap-4">
            <img 
              src={logo} 
              alt="Pharmemecy logo"
              className="h-8 rounded-lg object-cover"
            />
            <span>$Pharmemecy</span>

          </Link>

          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-crypto-green transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-crypto-green transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-crypto-green transition-colors">
              About
            </Link>
          </nav> */}

          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="icon" className="text-gray-300 hover:text-crypto-green">
              <Search className="h-5 w-5" />
            </Button> */}
            <a 
            href='https://x.com/pharmemecy?s=21'
            target='_blank'
            >
              <img 
              src={x}
              alt="Twitter icon"
              className='h-8 rounded-lg object-cover bg-white'
              />
            </a>
            <div className="relative !ml-1">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-crypto-green relative w-auto"
                onClick={() => setShowCartDropdown(!showCartDropdown)}
              >
                <div className="relative">
                  <span className='text-xl'>🛒</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-crypto-green text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Button>
              {showCartDropdown && <CartDropdown onClose={() => setShowCartDropdown(false)} />}
            </div>

            {/* {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-crypto-green">@{user?.username}</span>
                <Button variant="ghost" onClick={logout} className="text-gray-300 hover:text-crypto-green">
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-crypto-green"
                onClick={() => setShowAuthModal(true)}
              >
                <User className="h-5 w-5" />
              </Button>
            )} */}
          </div>
        </div>
      </div>

      {/* {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />} */}
      <div className='w-full text-center py-1 bg-primary crypto-button'>
        <p className='text-black flex justify-center items-center gap-4'>
          CA: TBD...TBD
          {isCopied?(
            <img
            src={check}
            className='h-6 cursor-pointer'
            onClick={()=>copyToClipboard("TBD...TBD")}
            />
          ):(
            <img
            src={copy}
            className='h-4 cursor-pointer'
            onClick={()=>{
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false)
              }, 2000);
              copyToClipboard("TBD...TBD");
            }}
            />
          )}
          
        </p>
      </div>
    </header>
  );
};

export default Header;
