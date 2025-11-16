import { create } from "zustand";

interface OpenDrawer {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useOpenDrawerHistory = create<OpenDrawer>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}));

export default useOpenDrawerHistory;
