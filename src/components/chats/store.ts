import { create } from "zustand";

interface Models {
  uid: string | undefined;
  setUid: (value: string) => void;
}

export const useChatStore = create<Models>((set) => ({
  uid: undefined,
  setUid: (value: string) => set({ uid: value }),
}));
