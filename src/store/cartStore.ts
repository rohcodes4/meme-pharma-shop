import { create } from 'zustand';
import { CartItem, Product } from '../types';

const LOCAL_STORAGE_KEY = 'cart_items';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const saveToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

const loadFromLocalStorage = (): CartItem[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create<CartStore>((set, get) => {
  // Load initial items from localStorage
  const initialItems = loadFromLocalStorage();

  return {
    items: initialItems,

    addItem: (product: Product) => {
      const { items } = get();
      const existingItem = items.find(item => item.product.id === product.id);

      let updatedItems;
      if (existingItem) {
        updatedItems = items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...items, { product, quantity: 1 }];
      }

      saveToLocalStorage(updatedItems);
      set({ items: updatedItems });
    },

    removeItem: (productId: string) => {
      const updatedItems = get().items.filter(item => item.product.id !== productId);
      saveToLocalStorage(updatedItems);
      set({ items: updatedItems });
    },

    updateQuantity: (productId: string, quantity: number) => {
      if (quantity <= 0) {
        get().removeItem(productId);
        return;
      }

      const updatedItems = get().items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      saveToLocalStorage(updatedItems);
      set({ items: updatedItems });
    },

    clearCart: () => {
      saveToLocalStorage([]);
      set({ items: [] });
    },

    getTotalPrice: () => {
      return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },

    getTotalItems: () => {
      return get().items.reduce((total, item) => total + item.quantity, 0);
    }
  };
});



// import { create } from 'zustand';
// import { CartItem, Product } from '../types';

// interface CartStore {
//   items: CartItem[];
//   addItem: (product: Product) => void;
//   removeItem: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   clearCart: () => void;
//   getTotalPrice: () => number;
//   getTotalItems: () => number;
// }

// export const useCartStore = create<CartStore>((set, get) => ({
//   items: [],

//   addItem: (product: Product) => {
//     const { items } = get();
//     const existingItem = items.find(item => item.product.id === product.id);

//     if (existingItem) {
//       set({
//         items: items.map(item =>
//           item.product.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       });
//     } else {
//       set({ items: [...items, { product, quantity: 1 }] });
//     }
//   },

//   removeItem: (productId: string) => {
//     set({ items: get().items.filter(item => item.product.id !== productId) });
//   },

//   updateQuantity: (productId: string, quantity: number) => {
//     if (quantity <= 0) {
//       get().removeItem(productId);
//       return;
//     }

//     set({
//       items: get().items.map(item =>
//         item.product.id === productId
//           ? { ...item, quantity }
//           : item
//       )
//     });
//   },

//   clearCart: () => set({ items: [] }),

//   getTotalPrice: () => {
//     return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
//   },

//   getTotalItems: () => {
//     return get().items.reduce((total, item) => total + item.quantity, 0);
//   }
// }));
