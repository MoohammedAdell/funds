import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    }),
  decreaseQty: (id) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === id);

      if (!existingItem) return {};

      if (existingItem.qty === 1) {
        return {
          cart: state.cart.filter((item) => item.id !== id),
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item,
        ),
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
