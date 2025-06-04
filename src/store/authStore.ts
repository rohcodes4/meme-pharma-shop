
import { create } from 'zustand';
import { AuthState, User } from '../types';

interface AuthStore extends AuthState {
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock user data for demo
const MOCK_USERS = [
  { id: '1', username: 'cryptotrader', email: 'trader@pharmemesy.com', password: 'password123' },
  { id: '2', username: 'moonboy', email: 'moon@pharmemesy.com', password: 'password123' }
];

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,

  login: async (username: string, password: string) => {
    // Mock authentication
    const user = MOCK_USERS.find(u => u.username === username && u.password === password);
    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      set({ user: userWithoutPassword, isAuthenticated: true });
      localStorage.setItem('pharmemesy_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  },

  register: async (username: string, email: string, password: string) => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      username,
      email
    };
    set({ user: newUser, isAuthenticated: true });
    localStorage.setItem('pharmemesy_user', JSON.stringify(newUser));
    return true;
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('pharmemesy_user');
  }
}));

// Initialize auth state from localStorage
if (typeof window !== 'undefined') {
  const savedUser = localStorage.getItem('pharmemesy_user');
  if (savedUser) {
    const user = JSON.parse(savedUser);
    useAuthStore.setState({ user, isAuthenticated: true });
  }
}
