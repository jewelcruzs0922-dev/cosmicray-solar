"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { cart, cartTotal, updateQty, removeFromCart, clearCart } = useCart();

  return (
    <>
      <div className="cart-overlay" aria-hidden={!open} onClick={onClose} />
      <aside
        className="cart-sidebar"
        aria-hidden={!open}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        <div className="cart-sidebar__header">
          <h2>Your Cart</h2>
          <button className="cart-sidebar__close" type="button" aria-label="Close cart" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar__items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Your cart is empty</p>
              <button className="btn btn--primary btn--small" type="button" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <Image className="cart-item__img" src={item.img} alt={item.name} width="64" height="64" />
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__price">${item.price.toLocaleString()}</div>
                  <div className="cart-item__qty">
                    <button type="button" aria-label={`Decrease quantity of ${item.name}`} onClick={() => updateQty(item.id, -1)}>&minus;</button>
                    <span aria-label={`${item.qty} in cart`}>{item.qty}</span>
                    <button type="button" aria-label={`Increase quantity of ${item.name}`} onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button type="button" className="cart-item__remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__total">
              <span>Total</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <Link href="/schedule" className="btn btn--primary btn--full" id="checkout-btn" onClick={onClose}>Proceed to Checkout</Link>
            <button className="btn btn--ghost btn--full" type="button" onClick={clearCart}>Clear Cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
