import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import CartProvider, { useCart, CartItem } from "@/components/CartContext";
import { type ReactNode } from "react";

function TestConsumer() {
  const { cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal } = useCart();
  return (
    <div>
      <span data-testid="cart-count">{cartCount}</span>
      <span data-testid="cart-total">{cartTotal}</span>
      <span data-testid="cart-length">{cart.length}</span>
      <button onClick={() => addToCart({ id: 1, name: "Panel A", price: 100, img: "/a.jpg" })}>Add A</button>
      <button onClick={() => addToCart({ id: 2, name: "Panel B", price: 200, img: "/b.jpg" })}>Add B</button>
      <button onClick={() => addToCart({ id: 1, name: "Panel A", price: 100, img: "/a.jpg" })}>Add A Again</button>
      <button onClick={() => removeFromCart(1)}>Remove A</button>
      <button onClick={() => updateQty(2, 1)}>Inc B</button>
      <button onClick={() => updateQty(2, -1)}>Dec B</button>
      <button onClick={clearCart}>Clear</button>
      {cart.map((item: CartItem) => (
        <div key={item.id} data-testid={`item-${item.id}`}>
          {item.name} x{item.qty}
        </div>
      ))}
    </div>
  );
}

function renderWithCart(ui: ReactNode) {
  return render(<CartProvider>{ui}</CartProvider>);
}

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    get length() { return Object.keys(store).length; },
    key: (index: number) => Object.keys(store)[index] ?? null,
  };
})();

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock, writable: true });

describe("CartContext", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("provides initial empty cart state", () => {
    renderWithCart(<TestConsumer />);
    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-total")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-length")).toHaveTextContent("0");
  });

  it("adds items to cart", () => {
    renderWithCart(<TestConsumer />);
    act(() => {
      screen.getByText("Add A").click();
    });
    expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
    expect(screen.getByTestId("item-1")).toHaveTextContent("Panel A x1");
  });

  it("increments quantity when adding duplicate item", () => {
    renderWithCart(<TestConsumer />);
    act(() => {
      screen.getByText("Add A").click();
    });
    act(() => {
      screen.getByText("Add A Again").click();
    });
    expect(screen.getByTestId("cart-count")).toHaveTextContent("2");
    expect(screen.getByTestId("item-1")).toHaveTextContent("Panel A x2");
  });

  it("removes items from cart", () => {
    renderWithCart(<TestConsumer />);
    act(() => {
      screen.getByText("Add A").click();
    });
    act(() => {
      screen.getByText("Remove A").click();
    });
    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-length")).toHaveTextContent("0");
  });

  it("calculates total correctly", () => {
    renderWithCart(<TestConsumer />);
    act(() => {
      screen.getByText("Add A").click();
    });
    act(() => {
      screen.getByText("Add B").click();
    });
    expect(screen.getByTestId("cart-total")).toHaveTextContent("300");
  });

  it("clears the cart", () => {
    renderWithCart(<TestConsumer />);
    act(() => {
      screen.getByText("Add A").click();
    });
    act(() => {
      screen.getByText("Add B").click();
    });
    act(() => {
      screen.getByText("Clear").click();
    });
    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-length")).toHaveTextContent("0");
  });
});
