import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  removeAllCount: () => set({ count: 0 }),
  updateCount: (newCount) => set({ count: newCount }),
}));
