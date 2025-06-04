
import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let success = false;
      if (isLogin) {
        success = await login(username, password);
      } else {
        success = await register(username, email, password);
      }

      if (success) {
        onClose();
      } else {
        setError('Invalid credentials. Try: cryptotrader / password123');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md crypto-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl bg-crypto-gradient bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Join the Community'}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {isLogin ? 'Login to continue trading' : 'Create your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="crypto-input"
              required
            />
            {!isLogin && (
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="crypto-input"
                required
              />
            )}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="crypto-input"
              required
            />
            
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <Button type="submit" className="w-full crypto-button">
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-crypto-green hover:underline"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
