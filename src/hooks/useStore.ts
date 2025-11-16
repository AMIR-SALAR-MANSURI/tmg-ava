import { create } from "zustand";

type State = {
  domainId: number | undefined;
};
type Action = {
  setDomain: (id: number) => void;
};

const useStore = create<State & Action>((set) => ({
  domainId: undefined,
  setDomain: (id) => set({ domainId: id }),
}));

export { useStore };
