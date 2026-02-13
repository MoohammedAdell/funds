import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (name, email,role) => {
        set({ loading: true, error: null });

        try {
          // Fake API Simulation
          const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
              if (!name || !email) {
                reject(new Error("Name and Email are required"));
              } else {
                resolve({
                  user: {
                    name,
                    email,
                    role,
                  },
                  token: "fake-jwt-token",
                });
              }
            }, 1000);
          });

          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            loading: false,
          });

          return true; // مهم
        } catch (err) {
          set({
            error: err.message,
            loading: false,
          });

          return false; // مهم
        }
      },

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        }),
    }),
    {
      name: "auth-storage",

      // نخزن بس الحاجات المهمة
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
