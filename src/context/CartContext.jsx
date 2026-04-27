import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zyarc-cart') || '[]'); }
    catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);

  const save = (updated) => {
    setCart(updated);
    localStorage.setItem('zyarc-cart', JSON.stringify(updated));
  };

  const addToCart = useCallback((name, price, img) => {
    setCart(prev => {
      const next = [...prev];
      const idx = next.findIndex(i => i.name === name);
      if (idx > -1) next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
      else next.push({ name, price, img, qty: 1 });
      localStorage.setItem('zyarc-cart', JSON.stringify(next));
      return next;
    });
  }, []);

  const removeFromCart = useCallback((name) => {
    setCart(prev => {
      const next = prev.filter(i => i.name !== name);
      localStorage.setItem('zyarc-cart', JSON.stringify(next));
      return next;
    });
  }, []);

  const changeQty = useCallback((name, delta) => {
    setCart(prev => {
      const next = [...prev];
      const idx = next.findIndex(i => i.name === name);
      if (idx === -1) return prev;
      const newQty = next[idx].qty + delta;
      if (newQty <= 0) {
        next.splice(idx, 1);
      } else {
        next[idx] = { ...next[idx], qty: newQty };
      }
      localStorage.setItem('zyarc-cart', JSON.stringify(next));
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem('zyarc-cart');
  }, []);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      cart, isOpen, setIsOpen,
      addToCart, removeFromCart, changeQty, clearCart,
      totalItems, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
