import { create } from "zustand";

interface UseAuthProps {
  token: null | string;
  setToken: (newToken: null | string) => void;
}

const useAuth = create<UseAuthProps>((set) => ({
  token: null,
  setToken: (newToken) => set({ token: newToken }),
}));

export { useAuth };
