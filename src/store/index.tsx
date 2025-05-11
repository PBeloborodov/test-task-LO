import { create } from 'zustand';

type AppStoreType = {
  setToken: (token: string) => void;
  clearToken: () => void;
  token?: string;
};

export const useAppStore = create<AppStoreType>((set) => ({
  token: undefined,
  setToken: (newToken) => set({ token: newToken }),
  clearToken: () => set({ token: undefined }),
}));
