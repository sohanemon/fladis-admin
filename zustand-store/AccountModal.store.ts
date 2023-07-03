import { create } from "zustand";

interface AccountModal {
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
}

export const useAccountModal = create<AccountModal>((set) => ({
  modalShow: false,
  setModalShow: (modalShow: boolean) => set(() => ({ modalShow })),
}));
