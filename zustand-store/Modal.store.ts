import { ReactElement } from "react";
import { create } from "zustand";

interface ModalStore {
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
  modalContent: ReactElement | null;
  setModalContent: (modalContent: ReactElement | null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalShow: false,
  setModalShow: (modalShow: boolean) => set(() => ({ modalShow })),
  modalContent: null,
  setModalContent: (modalContent: ReactElement | null) =>
    set(() => ({ modalContent })),
}));
