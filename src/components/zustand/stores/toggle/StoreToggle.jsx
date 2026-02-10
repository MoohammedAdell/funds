import { create } from "zustand";

export const useToggle = create((set) => ({
  isOn: false,
  toggle: () =>
    set((state) => ({ isOn: !state.isOn })),
}));
