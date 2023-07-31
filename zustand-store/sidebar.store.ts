import { create } from 'zustand';

interface SidebarStoreType {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const useSidebarStore = create<SidebarStoreType>()((set) => ({
  expanded: false,
  setExpanded(expanded) {
    set(() => ({ expanded }));
  },
}));

export default useSidebarStore;
