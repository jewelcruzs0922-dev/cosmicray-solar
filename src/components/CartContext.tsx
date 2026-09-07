"use client";

import { useState, useEffect, useCallback, useRef, createContext, useContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
  category?: string;
}

interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: CartItem & { category?: string }) => void;
  removeFromCart: (productId: number) => void;
  updateQty: (productId: number, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within Cart provider");
  return ctx;
}

function readCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("cr-cart");
    if (stored) return JSON.parse(stored) as CartItem[];
  } catch {
    localStorage.removeItem("cr-cart");
  }
  return [];
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const stored = readCartFromStorage();
    if (stored.length > 0) {
      // Hydrate cart from localStorage on first client render
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart((prev) => (prev.length === 0 ? stored : prev));
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    localStorage.setItem("cr-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: CartItem & { category?: string }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: product.id, name: product.name, price: product.price, img: product.img, qty: 1, category: product.category }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const updateQty = useCallback((productId: number, delta: number) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;
      if (item.qty + delta <= 0) return prev.filter((i) => i.id !== productId);
      return prev.map((i) => (i.id === productId ? { ...i, qty: i.qty + delta } : i));
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}
