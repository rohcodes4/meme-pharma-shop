
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  form: string;
  use: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
