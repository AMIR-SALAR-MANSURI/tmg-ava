import { create } from "zustand";

interface OpenDrawerState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useOpenDrawerMenu = create<OpenDrawerState>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}));

export default useOpenDrawerMenu;
